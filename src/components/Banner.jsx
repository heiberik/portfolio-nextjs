import Link from "./Link";
import SanityImage from "./Image";

const Banner = ({ sanityData }) => {
    return (
        <section className="w-screen relative h-screen max-w-[100%] overflow-hidden flex">
            <div className="h-fit w-fit my-auto justify-center flex flex-col gap-4 z-10 pl-4 md:pl-8 xl:pl-16 relative">
                <h1 className="text-3xl md:text-4xl xl:text-5xl mb-2 whitespace-break-spaces max-w-full">{sanityData?.title} </h1>
                <p className="w-[50ch] md:w-[60ch] max-w-full text-muted-foreground"> {sanityData?.description} </p>
                <div className="flex flex-wrap gap-2 relative justify-start mt-6">
                    {sanityData?.bannerButtons?.map(button => <Link sanityData={button} key={button.url} size="lg" />)}
                </div>
            </div>
            <div className="flex-1 w-1/2 h-full absolute right-[-10vw] md:right-[-5vw] bottom-0 opacity-40 dark:opacity-25 flex items-end justify-end">
                <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-primary to-transparent transform skew-x-12 scale-150 md:scale-100 md:skew-x-12"></div>
                <SanityImage
                    sanityData={sanityData?.image}
                    priority={true}
                    overflowX="visible"
                    objectFit="cover" />
            </div>

            <div className="w-screen h-16 z-20 absolute bottom-0 left-0 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    )
}

export default Banner