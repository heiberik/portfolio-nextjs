import Project from "./Project"

const PromotedProjects = ({ sanityData }) => {

    return (
        <section className="w-full p-4 md:p-8 xl:p-12 py-8 md:py-20 xl:py-28 flex flex-col gap-8 xl:gap-12">
            <h2 className="text-4xl text-center max-w-[80rem]"> Fritidsprosjekter jeg er fornøyd med </h2>
            <div className="gap-12 md:gap-20 flex flex-col max-w-[80rem]">
                {sanityData?.map(project => <Project sanityData={project} key={project._ref} /> )}
            </div>
        </section>
    )
}

export default PromotedProjects