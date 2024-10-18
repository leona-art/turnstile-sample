'use client';

import Script from 'next/script';

export default function TurnstileForm() {
    return (
        <>
            <div
                className="cf-turnstile"
                data-sitekey={"0x4AAAAAAAxvrDM658NjG4In"}
                style={{
                    margin: "20px"
                }}
            />
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        </>
    );
}