import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Patrikas Voicechovski — Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont(): Promise<ArrayBuffer | null> {
    try {
        const css = await fetch('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600', {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
        }).then(r => r.text());
        const url = css.match(/src: url\((.+?)\) format/)?.[1];
        if (!url) return null;
        return fetch(url).then(r => r.arrayBuffer());
    } catch {
        return null;
    }
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isLt = locale === 'lt';

    const role = isLt ? 'Full-Stack Programuotojas' : 'Full-Stack Developer';
    const badge = isLt ? 'Prieinamas freelance projektams' : 'Available for freelance projects';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace('https://', '') ?? 'patrikas.dev';

    const [photoData, fontData] = await Promise.all([
        readFile(join(process.cwd(), 'public/my_photo.jpg'), 'base64'),
        loadFont(),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    background: '#0a0a0e',
                    padding: '80px',
                }}
            >
                {/* Text content */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid rgba(155, 141, 245, 0.35)',
                            borderRadius: '100px',
                            padding: '10px 24px',
                            color: '#9b8df5',
                            fontSize: '20px',
                            width: 'fit-content',
                            marginBottom: '36px',
                        }}
                    >
                        {badge}
                    </div>

                    <div
                        style={{
                            fontSize: '68px',
                            fontWeight: 600,
                            color: '#f0f0f0',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                        }}
                    >
                        Patrikas Voicechovski
                    </div>

                    <div
                        style={{
                            fontSize: '30px',
                            color: '#9b8df5',
                            marginBottom: '48px',
                        }}
                    >
                        {role}
                    </div>

                    <div style={{ fontSize: '22px', color: '#444' }}>{siteUrl}</div>
                </div>

                {/* Photo */}
                <img
                    src={`data:image/jpeg;base64,${photoData}`}
                    width={260}
                    height={260}
                    style={{
                        borderRadius: '50%',
                        border: '2px solid rgba(155, 141, 245, 0.25)',
                        marginLeft: '80px',
                        flexShrink: 0,
                    }}
                />
            </div>
        ),
        {
            ...size,
            fonts: fontData ? [{ name: 'DM Sans', data: fontData, style: 'normal', weight: 400 }] : [],
        },
    );
}
