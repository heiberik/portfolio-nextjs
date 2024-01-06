import Container from './ui/Container'
import PostCard from './PostCard'
import { Button } from './ui/button'
import Link from 'next/link'

const PromotedPosts = ({ sanityData }) => {
    return (
        <Container>
            <div className='grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8'>
                <div className='flex flex-col gap-6'>
                    <div className='flex-grow bg-gradient-to-br from-primary/10 via-primary/80 to-primary/10 p-[2px] text-3xl font-medium text-foreground '>
                        <h2 className='bg-card p-4 h-full w-full flex items-center justify-center'>
                            Skriverier
                        </h2>
                    </div>
                    <Button asChild className='font-bold' variant='default'>
                        <Link href={'/blogg'}>
                            <p className='font-medium'>Alle mine skriverier</p>
                        </Link>
                    </Button>
                </div>
                {sanityData?.map((post) => (
                    <PostCard sanityData={post} key={post._ref} />
                ))}
            </div>
        </Container>
    )
}

export default PromotedPosts
