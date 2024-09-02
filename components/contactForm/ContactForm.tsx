'use client'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Fields, WithFormState } from "./Fields";
import { Card } from "@radix-ui/themes";

export type ContactFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}
  
export const ContactForm = () => {
    const isClient = typeof window !== 'undefined';
    return (
        <>
            {
                isClient ? (
                    <GoogleReCaptchaProvider
                        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY || ''}
                        useEnterprise={true}
                    >
                        <Card className="py-8 px-4">
                            {WithFormState(Fields)}
                        </Card>
                    </GoogleReCaptchaProvider>
                ) : <div></div>
            }
        </>
    )
}