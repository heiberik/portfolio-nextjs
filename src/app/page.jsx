import AboutMe from "@/components/AboutMe"
import Banner from "@/components/Banner"
import PromotedPosts from "@/components/PromotedPosts"
import PromotedProjects from "@/components/PromotedProjects"
import { getFrontPage } from "@/lib/sanityService"

const frontPage = await getFrontPage()

const Home = () => {
    return (
        <main>
            <Banner sanityData={frontPage?.banner} />
            <PromotedPosts sanityData={frontPage?.promotedPosts} />
            <PromotedProjects sanityData={frontPage?.promotedProjects} />
            <AboutMe sanityData={frontPage?.aboutMe} />
        </main>
    )
}

export default Home