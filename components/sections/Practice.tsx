import { Heading, Section } from "@radix-ui/themes";
import { ContentContainer } from "../container/ContentContainer";
import { PracticePanel } from "../PracticePanel";

// export type PracticeUi = Partial<Practice>


export const Practice: React.FC<any> = ({items, sectionTitle}) => {
    return (
        <Section className='' id="areas-of-practice">
            <ContentContainer>
                <Heading size="9">{sectionTitle}</Heading>
                <PracticePanel items={items}/>
            </ContentContainer>
        </Section>
    )
}