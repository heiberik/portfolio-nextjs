import ProjectCard from "./ProjectCard"

const PromotedProjects = ({ sanityData }) => {

    return (
        <section className="w-full p-4 md:p-8 py-8 md:py-16 !pt-0 bg-background flex flex-col gap-4 xl:gap-8">
            <div className="gap-4 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1280px]">
                <h2 className="text-4xl text-center flex items-center p-4 md:p-8 max-w-[1280px] bg-secondary rounded-lg"> Prosjekter jeg er fornøyd med </h2>
                {sanityData?.map(project => <ProjectCard sanityData={project} key={project._ref} />)}
            </div>
        </section>
    )
}

export default PromotedProjects