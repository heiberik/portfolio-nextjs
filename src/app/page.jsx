import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import ContactMe from '@/components/ContactMe'
import PromotedPosts from '@/components/PromotedPosts'
import PromotedProjects from '@/components/PromotedProjects'
import { getFrontPage } from '@/lib/sanityService'

const frontPage = await getFrontPage()

const Home = () => {
    return (
        <main>
            <Banner sanityData={frontPage?.banner} />
            <PromotedProjects sanityData={frontPage?.promotedProjects} />
            <AboutMe sanityData={frontPage?.aboutMe} />
            <PromotedPosts sanityData={frontPage?.promotedPosts} />
            <ContactMe sanityData={frontPage?.contactMe} />
        </main>
    )
}

export default Home
