import Link from 'next/link'
import ProjectCard from './ProjectCard'
import Container from './ui/Container'
import { Button } from './ui/button'

const PromotedProjects = ({ sanityData }) => {
    return (
        <Container>
            <div className='grid max-w-[1280px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex-grow bg-gradient-to-br from-primary/10 via-primary/80 to-primary/10 p-[2px] text-3xl font-medium text-foreground '>
                        <h2 className='bg-card p-4 h-full w-full flex items-center justify-center'>
                            Prosjekter
                        </h2>
                    </div>
                    <Button asChild className='font-bold' variant='default'>
                        <Link href={'/blogg'}>
                            <p className='font-medium'>Alle mine prosjekter</p>
                        </Link>
                    </Button>
                </div>{' '}
                {sanityData?.map((project) => (
                    <ProjectCard sanityData={project} key={project._ref} />
                ))}
            </div>
        </Container>
    )
}

export default PromotedProjects
