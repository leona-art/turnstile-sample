"use server";
import { redirect } from "next/navigation";

export async function validateTurnstile(formData: FormData){
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error('Turnstile secret key is missing');
    }

    const token = formData.get("cf-turnstile-response");
    // const ip = request.headers.get("CF-Connecting-IP"); // requestはグローバルで取得可能

    const data = new FormData();
    data.append("secret", secretKey);
    data.append("response", token as string);
    // data.append("remoteip", ip as string);

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();

    if(result.success){
        redirect('/home');
    }else{
        throw new Error('Turnstile validation failed');
    }

}