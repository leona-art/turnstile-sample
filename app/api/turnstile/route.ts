import { NextResponse } from 'next/server';

const secretKey = process.env.SECRET_KEY;
export const runtime = 'edge';

export async function POST(request: Request) {
  if (!secretKey) {
    return new NextResponse('Turnstile secret key is missing', { status: 500 });
  }

  const { token } = await request.json();

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: secretKey,
      response: token,
    }),
  });

  const data = await response.json();

  if (data.success) {
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } else {
    return new NextResponse(JSON.stringify({ success: false, error: data['error-codes'] }), {
      status: 400,
    });
  }
}
