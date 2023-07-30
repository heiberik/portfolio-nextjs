import PostPreview from "./PostPreview"

const PromotedPosts = ({ sanityData }) => {
    return (
        <section className="w-full p-4 md:p-8 xl:p-12 py-8 md:py-20 xl:py-28 bg-muted flex flex-col gap-8 xl:gap-12">
            <h2 className="text-4xl text-center max-w-[1280px]"> Noen av mine skriverier </h2>
            <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px]">
                {sanityData?.map(post => <PostPreview sanityData={post} key={post._ref}/> )}
            </div>
        </section>
    )
}

export default PromotedPosts