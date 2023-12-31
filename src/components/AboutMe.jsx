import Image from "next/image";
import Container from "./ui/Container";


const Bubble = ({ children, ...props }) => {
    return (
        <div className="py-2 px-4 rounded-xl bg-card whitespace-normal break-keep border" {...props}>
            {children}
        </div>
    )
}

const TechBubble = ({ imgSrc, name }) => {
    return (
        <div className="group p-4 bg-primary rounded-xl whitespace-normal break-keep relative w-fit bg-gradient-to-bl from-card to-secondary cursor-default">
            <Image src={imgSrc} height={100} width={100} alt={`${name} logo`} className="transition-opacity duration-300 group-hover:opacity-0" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-transparent hover:text-card-foreground transition-text duration-300 text-2xl font-semibold">
                {name}
            </div>
        </div>
    )
}


const AboutMe = ({ sanityData }) => {
    return (
        <Container>
            <div className="absolute opacity-10 z-1 inset-0 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
            <div className="flex flex-col min-h-screen z-10 ap-8 text-card-foreground">
                <h2 className="text-3xl font-medium flex items-center justify-center p-4 md:p-8 rounded-lg text-foreground"> Om meg </h2>
                <div className="flex gap-8">
                    <div className="flex-1 flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-foreground"> Hvem er jeg? </h3>
                        <div className="flex gap-2 flex-wrap">
                            <Bubble> 31-åring </Bubble>
                            <Bubble> Osloborger </Bubble>
                            <Bubble> Informatiker </Bubble>
                            <Bubble> Jurist </Bubble>
                            <Bubble> Pappa </Bubble>
                            <Bubble> Seniorkonsulent </Bubble>
                            <Bubble> Tullehøne </Bubble>
                            <Bubble> Gymgåer </Bubble>
                            <Bubble> Rakker </Bubble>
                            <Bubble> Samboer </Bubble>
                            <Bubble> Miniatyrmaler </Bubble>
                            <Bubble> Utvikler </Bubble>
                            <Bubble> Løper </Bubble>
                            <Bubble> Roer </Bubble>
                            <Bubble> Turgåer </Bubble>
                            <Bubble> Bokleser </Bubble>
                            <Bubble> Yorashek </Bubble>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-card-foreground"> Hva liker jeg å arbeide med? </h3>
                        <div className="flex flex-wrap gap-4 rounded-xl">
                            <TechBubble name="HTML" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <TechBubble name="CSS" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <TechBubble name="Javascript" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <TechBubble name="NextJS" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                            <TechBubble name="NodeJS" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <TechBubble name="React" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <TechBubble name="Tailwind" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            <TechBubble name="MongoDB" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                            <TechBubble name="Docker" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                            <TechBubble name="Git" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <TechBubble name="GitHub" imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe