import Container from "./ui/Container"
import PostCard from "./PostCard"

const PromotedPosts = ({ sanityData }) => {
    return (
        <Container>
            <div className="gap-4 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <h2 className="text-3xl flex items-center justify-center p-4 md:p-8 bg-secondary rounded-lg text-secondary-foreground"> Skriverier </h2>
                {sanityData?.map(post => <PostCard sanityData={post} key={post._ref}/> )}
            </div>
        </Container>
    )
}

export default PromotedPosts