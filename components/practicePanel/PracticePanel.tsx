'use client';
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useMemo, useState } from "react";
import Image from 'next/image';
import { sanityImageUrlFor } from "@/lib/sanityImageUrlFor";

export const PracticePanel: React.FC<any> = ({items}) => {
    const [selectedKey, setSelectedKey] = useState('');
    useEffect(() => {
        // set selected key to first item
        const firstItem = items[0];
        setSelectedKey(firstItem._key);
    }, [items])

    const selectedItem = useMemo(() => items.filter((item: any) => item._key === selectedKey)[0], [items, selectedKey]);
    const updateSelectedKey = (key: string) => setSelectedKey(key);

    return (
        <Box className="mt-5">
            { selectedItem && (
                <Flex className='flex-col md:flex-row items-center gap-10'>
                    <Box className='grow'>
                        <Heading className='italic'>{selectedItem.title}</Heading>
                        <Text as="p" className='mt-6' size="7">{selectedItem.description}</Text>
                    </Box>
                    <Flex className='grow gap-4 min-w-[316px] flex-wrap'>
                        {items.map((item: any) => {
                            return (
                                <Box className='transition-colors w-[150px] h-[150px] relative cursor-pointer drop-shadow-md hover:drop-shadow-lg' onClick={() => updateSelectedKey(item._key)} key={item._key}>
                                    { /* eslint-disable-next-line @next/next/no-img-element */ }
                                    {
                                        item.icon && item.backgroundImage && (
                                            <>
                                                <Image
                                                    alt={`Icon for ${item.title}`}
                                                    className="absolute z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 pointer-events-none"
                                                    src={sanityImageUrlFor(item?.icon?.asset?._ref as string).width(50).url()}
                                                    width={50}
                                                    height={50}
                                                />
                                                <Image
                                                    alt="lawfirm"
                                                    className="relative"
                                                    src={sanityImageUrlFor(item?.backgroundImage?.asset?._ref as string).width(150).url()}
                                                    quality={100}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </>
                                        )
                                    }
                                    <div className={`absolute top-0 w-full ${item._key === selectedKey ? 'bg-[#93b4ff]' : 'bg-white'} transition-colors hover:bg-[#93b4ff] opacity-80 h-full`} />
                                </Box>
                            )
                        })}
                    </Flex>
                </Flex>
            )}
        </Box>
    )
}