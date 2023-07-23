import Banner from "@/components/Banner"
import { getFrontPage } from "@/lib/sanityService"

const frontPage = await getFrontPage()

const Home = () => {
    return (
        <main className="h-screen w-screen">
            <Banner sanityData={frontPage?.banner} />
        </main>
    )
}

export default Home