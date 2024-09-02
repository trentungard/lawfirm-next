import Link from "next/link";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className='bg-[#414A6E]'>
            <Box>
                <Image 
                    alt="Lovecchio Law Logo"
                    src="/logo.svg"
                    height="500"
                    width="500"
                />
            </Box>
            <Flex>
                <Text>Created by <Link href="https://ungarddigital.com" target="_blank">Ungard Digital</Link></Text>
                <Text>Lovecchio Law</Text>
            </Flex>
        </div>
    )
}