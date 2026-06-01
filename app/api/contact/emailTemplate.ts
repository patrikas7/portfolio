function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export function buildEmailHtml(name: string, email: string, message: string): string {
    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    return `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1a1a2e;margin-bottom:24px">New contact form submission</h2>
            <table style="width:100%;border-collapse:collapse">
                <tr>
                    <td style="padding:8px 0;color:#6b7280;width:80px;vertical-align:top"><strong>Name</strong></td>
                    <td style="padding:8px 0;color:#111827">${safeName}</td>
                </tr>
                <tr>
                    <td style="padding:8px 0;color:#6b7280;vertical-align:top"><strong>Email</strong></td>
                    <td style="padding:8px 0"><a href="mailto:${safeEmail}" style="color:#6366f1">${safeEmail}</a></td>
                </tr>
                <tr>
                    <td style="padding:8px 0;color:#6b7280;vertical-align:top"><strong>Message</strong></td>
                    <td style="padding:8px 0;color:#111827;white-space:pre-wrap">${safeMessage}</td>
                </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">
            <p style="color:#9ca3af;font-size:12px">Sent from your portfolio contact form</p>
        </div>
    `;
}
