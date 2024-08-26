import { client } from '@/services/sanity/sanityClient'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export function sanityImageUrlFor(source: string) {
    console.log('builder', builder)
    return builder.image(source)
}