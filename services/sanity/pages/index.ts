import { client } from "../sanityClient"

export async function getPages() {
    const pages = await client.fetch('*[_type == "page"]');
    return pages;
}