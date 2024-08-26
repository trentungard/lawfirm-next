'use client'
import { Box, Card, Flex, TextField, Text, TextArea, Button } from "@radix-ui/themes";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}
  

export const ContactForm = () => {
    const { control, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('submit data', data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="py-8 px-4 !bg-red">
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
            </Card>
        </form>
    )
}