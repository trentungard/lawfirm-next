import Image from "next/image";
import { sanityImageUrlFor } from "@/lib/sanityImageUrlFor";
import { Header as HeaderContent } from "@/lovecchio-law/sanity.types"
import { Heading, Section } from "@radix-ui/themes";
import { ContentContainer } from "../container/ContentContainer";

type HeroProps = Partial<HeaderContent>;

export const Hero: React.FC<HeroProps> = (props) => {
    const {title, backgroundImage, coverImage} = props;
    const backgroundImageUrl = backgroundImage ? sanityImageUrlFor(backgroundImage?.asset?._ref as string).width(1920).url() : '';
    const coverImageUrl = coverImage ? sanityImageUrlFor(coverImage?.asset?._ref as string).width(500).url() : '';
    return (
        <Section className='relative skewed-section h-[700px] md:h-[900px]'>
            {
                backgroundImageUrl && (
                    <Image
                        alt="lawfirm"
                        className="relative max-h-[900px]"
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
            <div className="absolute top-0 w-full bg-black opacity-75 h-full max-h-[700px] md:max-h-[900px]" />
            <ContentContainer className="absolute top-1/2 -translate-y-1/2 w-3/4 flex flex-col md:flex-row items-center md:justify-center left-1/2 -translate-x-2/4 gap-10" >
                <div className="flex-1 w-full md:w-1/2 order-last md:order-first">
                    <Heading className='text-center md:text-left text-gray-100 text-5xl lg:text-7xl leading-snug break-words' weight="bold">{title}</Heading>
                </div>
                <div className="flex-initial md:flex-1 md:w-1/2 w-[300px] md:w-[400px]">
                {
                    coverImageUrl && (
                        <Image
                            alt='Cover Photo'
                            src={coverImageUrl}
                            height={400}
                            width={400}
                        />
                    )
                }
                </div>
            </ContentContainer>
        </Section>
    )
}