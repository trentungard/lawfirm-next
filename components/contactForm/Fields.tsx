'use client';
import { submitContact } from "@/services/contact/submitContact";
import { Box, Text, Flex, TextField, Button, TextArea } from "@radix-ui/themes";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ContactFormInputs } from "./ContactForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormInputsSchema } from "./ContactFormSchema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";

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

    if(!formState.isValid && formState.submitCount > 0) {
        return (
            <Text>
                There are errors.
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
        <Default control={control} setHasVerificationError={setHasVerificationError} onSubmit={handleSubmit(async (data) => await onSubmit(data))} />
    )
}

export const Fields: React.FC<any> = (props: any) => {
    const {control, onSubmit } = props;
    const { executeRecaptcha } = useGoogleReCaptcha();
    // Create an event handler so you can call the verification on button click event or form submit
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
  
    // You can use useEffect to trigger the verification as soon as the component is done being loaded
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
                    </Box>
                    <Box className="grow basis-full">
                    <Text as="p">Last Name:</Text>
                        <Controller 
                            name="lastName"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
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
                    </Box>
                    <Box className="grow basis-full">
                    <Text as="p">Phone:</Text>
                        <Controller 
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => <TextField.Root {...field} />}
                        />
                    </Box>
                </Flex>
                <Box>
                    <Text as="p">Message:</Text>
                    <Controller 
                        name="message"
                        control={control}
                        render={({ field }) => <TextArea {...field} placeholder="Placeholder" />}
                    />
                </Box>
                <Button className="cursor-pointer">Submit</Button>
            </Flex>

        </form>
    )
}