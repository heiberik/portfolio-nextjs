import { getPostForPreview } from '@/lib/sanityService'
import Link from 'next/link'
import Image from './Image'
import { Button } from './ui/button'

const PostCard = async ({ sanityData }) => {
    const post = await getPostForPreview(sanityData._ref)

    if (!post) return null
    return (
        <Button asChild variant='link' size='fit'>
            <Link href={post.slug.current}>
                <div className='group w-full transform overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-card to-secondary/25 text-secondary-foreground shadow-md transition duration-300 ease-out hover:border-foreground/10'>
                    <div className='relative h-48 w-full overflow-hidden'>
                        <Image
                            objectFit='cover'
                            sanityData={post.image}
                            className='transform transition-transform duration-500 ease-out group-hover:scale-110'
                        />
                    </div>
                    <div className='p-4'>
                        <h3 className='mb-1 text-xl font-semibold text-card-foreground'>
                            {post.title}
                        </h3>
                        <p className='line-clamp-4 text-sm text-card-foreground/60'>
                            {post.intro}
                        </p>
                    </div>
                </div>
            </Link>
        </Button>
    )
}

export default PostCard
