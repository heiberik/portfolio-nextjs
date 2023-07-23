import Link from "./Link";
import SanityImage from "./Image";

const Banner = ({ sanityData }) => {

    return (
        <section className="w-screen relative h-screen max-w-[100%] flex">

            <div className="flex-1 w-full justify-center flex flex-col gap-2 z-10 pl-4 md:pl-8">
                <h1 className=" text-2xl md:text-3xl xl:text-4xl mb-2 pb-2 whitespace-break-spaces">{sanityData?.title} </h1>
                <p className="max-w-[60ch]"> {sanityData?.description} </p>
                <div className="flex flex-wrap gap-2 relative justify-start mt-2">
                    {sanityData?.bannerButtons?.map(button => <Link sanityData={button} key={button.url} />)}
                </div>
            </div>
            <div className="flex-1 w-1/2 h-full absolute right-0 overflow-visible opacity-20 flex items-end justify-end">
                <SanityImage
                    sanityData={sanityData?.image}
                    priority={true}
                    overflowX="visible"
                    objectFit="cover" />
            </div>
        </section>
    )
}

export default Banner