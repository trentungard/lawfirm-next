import { client } from '@/services/sanity/sanityClient'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)
export const sanityImageUrlFor = (source: string) => builder.image(source);