'use client';

import Script from 'next/script';

export default function TurnstileForm() {
    return (
        <>
            <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}
                style={{
                    margin: "20px"
                }}
            />
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        </>
    );
}