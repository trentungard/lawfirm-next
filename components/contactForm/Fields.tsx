'use client';
import { submitContact } from "@/services/contact/submitContact";
import { Box, Text, Flex, TextField, Button, TextArea } from "@radix-ui/themes";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ContactFormInputs } from "./ContactForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormInputsSchema } from "./ContactFormSchema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message"

export const WithFormState = (Default: any) => {
    const { control, handleSubmit, formState } = useForm<ContactFormInputs>({resolver: zodResolver(contactFormInputsSchema)});
    const [hasVerificationError, setHasVerificationError] = useState(false);

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        if(hasVerificationError){
            return
        }
        return await submitContact(data);
    }

    if(formState.isSubmitting || formState.isLoading) {
        return (
            <Text>
                Loading...
            </Text>
        )
    }

    if(hasVerificationError && formState.submitCount > 0) {
        return (
            <Text>
                {"We're sorry, there was a problem. Please contact the office directly"}
            </Text>
        )
    }

    if(formState.isSubmitted && formState.isSubmitSuccessful && formState.isValid) {
        return (
            <Text>
                Thank you for your inquiry
            </Text>
        )
    }

    return (
        <Default 
            control={control} 
            setHasVerificationError={setHasVerificationError} 
            onSubmit={handleSubmit(async (data) => await onSubmit(data))} 
            errors={formState.errors} 
        />
    )
};

export const Fields: React.FC<any> = (props: any) => {
    const {control, errors, onSubmit } = props;
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      const verificationEndpoint =
        process.env.NEXT_PUBLIC_VERIFICATION_ENDPOINT || 'http://localhost:3000/api/verify-recaptcha';
  
      const token = await executeRecaptcha();
      const response = await fetch(verificationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        props.setHasVerificationError(true);
      } 
    }, [executeRecaptcha, props]);
  
    // Trigger the verification as soon as the component is done being loaded
    useEffect(() => {
      handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    return (
        <form onSubmit={onSubmit}>
            <Flex direction="column" gap="5">
                <Flex gap="3">
                    <Box className="grow basis-full">
                        <Text as="p">First Name:</Text>
                        <Controller 
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
                        <ErrorMessage errors={errors} name="firstName" />
                    </Box>
                    <Box className="grow basis-full">
                    <Text as="p">Last Name:</Text>
                        <Controller 
                            name="lastName"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
                        <ErrorMessage errors={errors} name="lastName" />
                    </Box>
                </Flex>
                <Flex gap="3">
                    <Box className="grow basis-full">
                        <Text as="p">Email:</Text>
                        <Controller 
                            name="email"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
                        <ErrorMessage errors={errors} name="email" />
                    </Box>
                    <Box className="grow basis-full">
                    <Text as="p">Phone:</Text>
                        <Controller 
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
                        <ErrorMessage errors={errors} name="phoneNumber" />
                    </Box>
                </Flex>
                <Box>
                    <Text as="p">Message:</Text>
                    <Controller 
                        name="message"
                        control={control}
                        render={({ field }) => <TextArea {...field} />}
                    />
                    <ErrorMessage errors={errors} name="message" />
                </Box>
                <Button className="cursor-pointer">Submit</Button>
            </Flex>
        </form>
    )
}