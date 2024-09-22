import Link from "next/link";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ContentContainer } from "../container/ContentContainer";
import Logo from "@/icons/Logo";

export const Footer = () => {
    return (
        <div className='bg-[#414A6E] py-6 text-white'>
            <ContentContainer>
                <Box>
                    <Logo height={150} width={300}/>
                </Box>
                <Flex className='gap-5 mt-3 flex-col md:flex-row'>
                    <Text className='md:border-r pr-5'>Created by <Link className='text-blue-300' href="https://ungarddigital.com" target="_blank"><u>Ungard Digital</u></Link></Text>
                    <Text className='md:border-r pr-5'><Link href="/privacy"><u>Privacy Policy</u></Link></Text>
                    <Text className='md:border-r pr-5'><Link href="/terms-of-service"><u>Terms Of Service</u></Link></Text>
                    <Text>Lovecchio Law 2024&copy;</Text>
                </Flex>
            </ContentContainer>
        </div>
    )
}