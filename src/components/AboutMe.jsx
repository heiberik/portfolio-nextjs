import Image from 'next/image'
import Container from './ui/Container'
import SpecialHeader from './ui/SpecialHeader'

const Bubble = ({ special, children, ...props }) => {
    return (
        <div
            className={`whitespace-normal  break-keep rounded-xl border border-primary px-4 py-2 ${special ? 'border-accent bg-accent text-white/90' : 'bg-primary/10'
                }`}
            {...props}
        >
            {children}
        </div>
    )
}

const TechBubble = ({ imgSrc, name }) => {
    return (
        <div className='group relative w-fit cursor-default whitespace-normal break-keep rounded-xl border border-primary bg-primary/10 p-4 hover:border-foreground/20'>
            <Image
                src={imgSrc}
                height={100}
                width={100}
                alt={`${name} logo`}
                className='transition-opacity duration-300 group-hover:opacity-0'
            />
            <div className='transition-text absolute inset-0 flex flex-col items-center justify-center text-2xl font-semibold text-transparent duration-300 hover:text-foreground'>
                {name}
            </div>
        </div>
    )
}

const AboutMe = ({ sanityData }) => {
    return (
        <Container id='om-meg'>
            <div className='z-1 absolute inset-0  h-full w-full bg-[linear-gradient(to_right,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--secondary))_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
            <div className='z-10 flex flex-col text-foreground'>
                <SpecialHeader> Om meg </SpecialHeader>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl font-medium text-foreground'>
                            Hvem er jeg?
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            <Bubble special={true}> Utvikler </Bubble>
                            <Bubble> 31-åring </Bubble>
                            <Bubble> Osloborger </Bubble>
                            <Bubble> Informatiker </Bubble>
                            <Bubble> Pappa </Bubble>
                            <Bubble> Seniorkonsulent </Bubble>
                            <Bubble special={true}> Tullehøne </Bubble>
                            <Bubble> Gymgåer </Bubble>
                            <Bubble> Rakker </Bubble>
                            <Bubble> Samboer </Bubble>
                            <Bubble> Miniatyrmaler </Bubble>
                            <Bubble> Løper </Bubble>
                            <Bubble> Roer </Bubble>
                            <Bubble> Turgåer </Bubble>
                            <Bubble special={true}> Jurist </Bubble>
                            <Bubble> Bokleser </Bubble>
                        </div>
                    </div>
                    <div className='lg:col-span-2 flex flex-col gap-4'>
                        <h3 className='text-xl font-medium text-foreground'>
                            Hvilke teknologier liker jeg?
                        </h3>
                        <div className='flex flex-wrap gap-4 rounded-xl'>
                            <TechBubble
                                name='HTML'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                            />
                            <TechBubble
                                name='CSS'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                            />
                            <TechBubble
                                name='Javascript'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                            />
                            <TechBubble
                                name='NextJS'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                            />
                            <TechBubble
                                name='NodeJS'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                            />
                            <TechBubble
                                name='React'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                            />
                            <TechBubble
                                name='Tailwind'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                            />
                            <TechBubble
                                name='MongoDB'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                            />
                            <TechBubble
                                name='Docker'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                            />
                            <TechBubble
                                name='GitHub'
                                imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe
