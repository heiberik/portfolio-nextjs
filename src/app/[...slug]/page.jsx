import BlockModule from "@/components/BlockModule";
import { getPage } from "@/lib/sanityService"
import { notFound } from 'next/navigation'


const DynamicPage = async ({ params }) => {

    const page = await getPage(params.slug)

    if (!page) notFound()
    return (
        <section className="w-full h-fit relative flex flex-col">

            <div className="flex flex-col gap-2 w-full">
                <h1 className="text-5xl w-fill text-left"> {page.title} </h1>
            </div>
            <div>
                {page?.contentBlocks?.map((module) => (
                    <BlockModule data={module} key={module._key} />
                ))}
            </div>
        </section>
    )
}

export default DynamicPage