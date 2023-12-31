import ProjectCard from "./ProjectCard"
import Container from "./ui/Container"

const PromotedProjects = ({ sanityData }) => {

    return (
        <Container>
            <div className="gap-4 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px]">
                <h2 className="text-3xl justify-center flex items-center p-4 md:p-8 max-w-[1280px] bg-secondary rounded-lg text-secondary-foreground"> Prosjekter </h2>
                {sanityData?.map(project => <ProjectCard sanityData={project} key={project._ref} />)}
            </div>
        </Container>
    )
}

export default PromotedProjects