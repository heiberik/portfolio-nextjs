import Container from "./ui/Container";

const Footer = () => {
    return (
        <footer className="bg-card bg-center text-foreground" >
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl mb-8"> Heiberik </h2>
                    <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-primary">Om</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-primary">Blogg</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-primary">Prosjekter</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-primary">Kontakt</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-primary">Hjelp</a>
                    </div>
                    <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
                    <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
                        <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg" alt="" className="inline-block" />
                        </a>
                        <a href="#" className="mx-auto flex max-w-[24px] flex-col font-bold">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg" alt="" className="inline-block" />
                        </a>
                        <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg" alt="" className="inline-block" />
                        </a>
                        <a href="#" className="mx-auto flex max-w-[24px] flex-col font-bold">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg" alt="" className="inline-block" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;