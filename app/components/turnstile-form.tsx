'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function TurnstileForm() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const handleTurnstileSuccess = (event: any) => {
            setToken(event.token);
        };

        window.addEventListener('turnstile-success', handleTurnstileSuccess);
        return () => window.removeEventListener('turnstile-success', handleTurnstileSuccess);
    }, []);

    return (
        <>
            <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}
                style={{ margin: "20px" }}
            />
            <input type="hidden" name="cf-turnstile-response" value={token ?? ""} />
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        </>
    );
}