import { getProject } from "@/lib/sanityService"
import RichText from "./RichText"
import Image from "./Image"

const Project = async ({ sanityData }) => {

    const project = await getProject(sanityData._ref)

    if (!project) return null
    return (
        <div className="w-full h-full bg-muted border rounded flex">
            <div className="w-1/2 m-6">
                <p className="text-4xl">
                    {project.title}
                </p>
                <div>
                    <RichText sanityData={project.description} />
                </div>
            </div>
            <div className="w-1/2 bg-primary relative">
                <Image sanityData={project.image} objectFit="cover"/>
            </div>

        </div>
    )
}

export default Project