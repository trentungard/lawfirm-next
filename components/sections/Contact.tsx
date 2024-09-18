import { Contact as ContactContent } from "@/lovecchio-law/sanity.types"
import { Box, Heading, Text, Section, Flex } from "@radix-ui/themes"
import { ContactForm } from "../contactForm/ContactForm"
import { ContentContainer } from "../container/ContentContainer"

type ContactUi = Partial<ContactContent>

export const Contact: React.FC<ContactUi> = ({title, email, phoneNumber, description}) => {
    return (
        <Section id="contact">
            <ContentContainer>
                <Heading size='7'>{title}</Heading>
                <Flex className='mt-8 flex-col md:flex-row' gap="8">
                    <Box className='grow basis-full'>
                        <Text as="p" size='4'><b>Phone: </b>{phoneNumber}</Text>
                        <Text as="p" size='4'><b>Email: </b>{email}</Text>
                        <Text as="p" size='4'>{description}</Text>
                    </Box>
                    <Box className='grow basis-full'>
                        <ContactForm />
                    </Box>
                </Flex>
            </ContentContainer>
        </Section>
    )
}