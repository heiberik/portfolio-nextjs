import { getProject } from '@/lib/sanityService'
import RichText from './RichText'
import Image from './Image'
import { Button } from './ui/button'
import Link from 'next/link'

const Project = async ({ sanityData }) => {
    const project = await getProject(sanityData._ref)
    if (!project) return null

    return (
        <Button asChild variant='link' size='fit' className='w-full'>
            <Link href={'/'} className='rounded-xl overflow-hidden'>
                <div className='w-full rounded-xl group bg-primary/10 text-foreground transform transition duration-300 ease-out overflow-hidden shadow-md border border-foreground/10 hover:border-foreground/30'>
                    <div className='relative w-full h-48 '>
                        <Image
                            objectFit='cover'
                            sanityData={project.image}
                            alt='Prosjektbilde'
                            className='transform group-hover:scale-110 transition-transform duration-500 ease-out'
                        />
                    </div>
                    <div className='p-4 md:p-6'>
                        <h3 className='font-semibold text-xl mb-1'>
                            {project.title}
                        </h3>
                        <p className='text-sm line-clamp-4'>{project.intro}</p>
                    </div>
                </div>
            </Link>
        </Button>
    )
}

export default Project
