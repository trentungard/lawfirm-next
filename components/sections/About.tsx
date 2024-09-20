import { AboutCard as AboutCardContent } from "@/lovecchio-law/sanity.types"
import { Flex, Section } from "@radix-ui/themes";
import { AboutCard } from "../ui/about-card";
import { ContentContainer } from "../container/ContentContainer";

type About = { about: Partial<AboutCardContent>[] };

export const About: React.FC<About> = ({about}) => {
    return (
        <Section className="bg-[#707792]" id="about-us">
            <ContentContainer>
                <Flex className='flex-col gap-5'>
                    {about && about.map(((individual, i) => {
                        return <AboutCard {...individual} key={i} />
                    }))}
                </Flex>
            </ContentContainer>
        </Section>
    )
}