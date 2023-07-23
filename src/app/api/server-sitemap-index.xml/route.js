import { getPages } from '@/lib/sanityService'
import { getServerSideSitemapIndex } from 'next-sitemap'

const getStaticUrls = async () => {

    const pages = await getPages()
    const staticUrls = pages.map((page) => `${process.env.SITE_URL + page.slug.current}`)
    return staticUrls
}

const staticUrls = await getStaticUrls()

export async function GET(request) {
    return getServerSideSitemapIndex(staticUrls)
}