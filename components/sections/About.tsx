import { AboutCard as AboutCardContent } from "@/lovecchio-law/sanity.types"
import { Section } from "@radix-ui/themes";
import { AboutCard } from "../ui/about-card";

type About = { about: Partial<AboutCardContent>[]; }

export const About: React.FC<About> = ({about}) => {
    return (
        <Section className="bg-[#707792]" id="about-us">
            {about.map(((individual, i) => {
                return <AboutCard {...individual} key={i} />
            }))}
        </Section>
    )
}