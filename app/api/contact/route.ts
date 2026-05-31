import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes.
// Resets on server restart — sufficient for a low-traffic portfolio.
const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = ipHits.get(ip);
    if (!entry || now > entry.resetAt) {
        ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
        return false;
    }
    if (entry.count >= RATE_LIMIT) return true;
    entry.count++;
    return false;
}

const schema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(10).max(5000),
});

function escapeHtml(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

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

    const result = schema.safeParse(body);
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
        subject: `New message from ${escapeHtml(name)}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
                <h2 style="color:#1a1a2e;margin-bottom:24px">New contact form submission</h2>
                <table style="width:100%;border-collapse:collapse">
                    <tr>
                        <td style="padding:8px 0;color:#6b7280;width:80px;vertical-align:top"><strong>Name</strong></td>
                        <td style="padding:8px 0;color:#111827">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 0;color:#6b7280;vertical-align:top"><strong>Email</strong></td>
                        <td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#6366f1">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                        <td style="padding:8px 0;color:#6b7280;vertical-align:top"><strong>Message</strong></td>
                        <td style="padding:8px 0;color:#111827;white-space:pre-wrap">${escapeHtml(message)}</td>
                    </tr>
                </table>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">
                <p style="color:#9ca3af;font-size:12px">Sent from your portfolio contact form</p>
            </div>
        `,
    });

    if (error) {
        console.error('Resend error:', error);
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
}
