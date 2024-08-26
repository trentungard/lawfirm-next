import Image from "next/image";
import { sanityImageUrlFor } from "@/lib/sanityImageUrlFor";
import { Header } from "@/lovecchio-law/sanity.types"
import { Heading, Section } from "@radix-ui/themes";
import { ContentContainer } from "../container/ContentContainer";

type HeroProps = Partial<Header>;

export const Hero: React.FC<HeroProps> = (props) => {
    const {title, backgroundImage, coverImage} = props;
    const backhgroundImageUrl = sanityImageUrlFor(backgroundImage?.asset?._ref as string).width(1920).url();
    const coverImageUrl = sanityImageUrlFor(coverImage?.asset?._ref as string).width(500).url();
    return (
        <Section className='relative skewed-section h-[900px]'>
            <Image
                alt="lawfirm"
                className="relative max-h-[900px]"
                src={backhgroundImageUrl}
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
            <div className="absolute top-0 w-full bg-black opacity-75 h-full max-h-[900px]" />
            <ContentContainer className="absolute top-1/2 -translate-y-1/2 w-2/3 flex flex-col md:flex-row items-center md:justify-center left-1/2 -translate-x-2/4 gap-10" >
                <Heading className='text-center md:text-left text-gray-100 text-7xl leading-snug' weight="bold">{title}</Heading>
                <Image
                    alt='Cover Photo'
                    src={coverImageUrl}
                    height={500}
                    width={500}
                 />
            </ContentContainer>
        </Section>
    )
}