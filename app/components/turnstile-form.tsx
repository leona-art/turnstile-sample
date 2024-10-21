'use client';

import Script from 'next/script';

export default function TurnstileForm() {
    return (
        <>
            <form method="POST" action="/api/turnstile">
                <div
                    className="cf-turnstile"
                    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}
                    style={{
                        margin: "20px"
                    }}
                />
                <button
                    type="submit"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >Submit</button>
            </form>

            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        </>
    );
}