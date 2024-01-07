import Container from './ui/Container'
import PostCard from './PostCard'
import { Button } from './ui/button'
import Link from 'next/link'
import SpecialHeader from './ui/SpecialHeader'

const PromotedPosts = ({ sanityData }) => {
    return (
        <Container>
            <div className='grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8'>
                <div className='flex flex-col gap-6'>
                    <SpecialHeader variant='square'>
                        Skriverier
                    </SpecialHeader>
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
