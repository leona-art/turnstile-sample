import { NextResponse } from 'next/server';

const secretKey = process.env.SECRET_KEY;
export const runtime = 'edge';

export async function POST(request: Request) {
  if (!secretKey) {
    return new NextResponse('Turnstile secret key is missing', { status: 500 });
  }

  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get("cf-turnstile-response");
  const ip = request.headers.get("CF-Connecting-IP");

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token!);
  formData.append("remoteip", ip!);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    // /home にリダイレクト
    return NextResponse.redirect(new URL('/home', request.url)); 
  } else {
    return new NextResponse(JSON.stringify({ success: false, error: data['error-codes'] }), {
      status: 400,
    });
  }
}
