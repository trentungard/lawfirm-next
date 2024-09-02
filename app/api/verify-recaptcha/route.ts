import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  const secretKey = process.env.RECAPTCHA_PRIVATE_KEY;
  const queryParams = querystring.stringify({
    secret: secretKey,
    response: token,
  });
  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?${queryParams}`, {
      method: 'POST',
    });
    const data = await response.json();
    const { score } = data;
    // Customize the score threshold as needed
    const scoreThreshold = 0.7; 

    if (score >= scoreThreshold) {
      // reCAPTCHA verification successful
      return new NextResponse('reCAPTCHA verification successful', {
        status: 200,
      });
    } else {
      // Verification failed
      return new Response('reCAPTCHA verification failed', {
        status: 400,
      });
    }
  } catch (error) {
    return new Response('Error verifying reCAPTCHA', {
      status: 500,
    });
  }
}