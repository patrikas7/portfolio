import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { contactSchema } from '@/schemas/contact';
import { isRateLimited } from './rateLimiter';
import { buildEmailHtml } from './emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    if (isRateLimited(ip)) {
        return Response.json({ error: 'Too many requests' }, { status: 429 });
    }

    const origin = req.headers.get('origin');
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
    if (allowedOrigin && origin !== allowedOrigin) {
        return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
        return Response.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { name, email, message } = result.data;
    const to = process.env.CONTACT_EMAIL;
    if (!to) {
        return Response.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const { error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to,
        replyTo: email,
        subject: `New message from ${name}`,
        html: buildEmailHtml(name, email, message),
    });

    if (error) {
        console.error('Resend error:', error);
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
}
