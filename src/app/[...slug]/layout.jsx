import { getPage, getPages } from "@/lib/sanityService"


export const generateMetadata = async ({ params }) => {

    const page = await getPage(params.slug)
    return {
        title: page?.seo?.titleSEO,
        description: page?.seo?.descriptionSEO,
    }
}

export async function generateStaticParams() {

    const pages = await getPages()
    return pages.map((page) => ({
        id: page.slug.current
    }))
}

export default async function Layout({ children }) {

    return (
        <>
            <main className="flex flex-1 bg-muted">
                <div className="p-4 md:p-8 xl:p-16 pb-12 md:pb-20 mt-20 md:mt-26 w-full flex justify-center">
                    <div className="w-full h-fit max-w-full">
                        {children}
                    </div>
                </div>
            </main>
        </>

    )
}
