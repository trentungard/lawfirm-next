import { sanityImageUrlFor } from "@/lib/sanityImageUrlFor";
import { AboutCard as AboutCardType } from "@/lovecchio-law/sanity.types";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ContentContainer } from "../container/ContentContainer";

export type AboutCardUi = Partial<AboutCardType>;

export const AboutCard: React.FC<AboutCardUi>= ({ position, description, title, photoOfIndividual, name }) => {
    console.log('bg image', photoOfIndividual)
    const backgroundImageUrl = photoOfIndividual ? sanityImageUrlFor(photoOfIndividual?.asset?._ref as string)?.width(400)?.url() : '';
    return (
        <Flex className='flex-col md:flex-row gap-0 md:gap-10'>
            <Card className="relative grow h-96">
                {
                    photoOfIndividual && (
                        <Image
                            alt="lawfirm"
                            className="relative"
                            src={backgroundImageUrl}
                            quality={100}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    )
                }
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.75))',
                    }}
                />
                <Box className="absolute bottom-5 text-gray-100">
                    <Text as="p" size="2">
                        {position}
                    </Text>
                    <Text as="p" size="5" weight="bold">
                        {name}
                    </Text>
                </Box>
            </Card>
            <Flex direction='column' className="grow bg-[#0C1434] justify-center text-gray-100 py-5 px-10 w-full md:w-1/2">
                <Heading as="h2" size="8">{title}</Heading>
                <Text className='mt-3' size="5">{description}</Text>
            </Flex>
        </Flex>
    )
}