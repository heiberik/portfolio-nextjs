import Link from 'next/link'
import ProjectCard from './ProjectCard'
import Container from './ui/Container'
import { Button } from './ui/button'
import SpecialHeader from './ui/SpecialHeader'

const PromotedProjects = ({ sanityData }) => {
    return (
        <Container variant='coloredBackground'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div className='flex flex-col gap-4'>
                    <SpecialHeader variant='square'>Prosjekter</SpecialHeader>
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
