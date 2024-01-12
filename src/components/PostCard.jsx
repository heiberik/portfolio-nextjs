import { getPostForPreview } from '@/lib/sanityService'
import Link from 'next/link'
import Image from './Image'
import { Button } from './ui/button'

const PostCard = async ({ sanityData }) => {
    const post = await getPostForPreview(sanityData._ref)

    if (!post) return null
    return (
        <Button asChild variant='link' size='fit'>
            <Link
                href={post.slug.current}
                className='rounded-xl overflow-hidden'
            >
                <div className='w-full rounded-xl group bg-primary/10 text-foreground transform transition duration-300 ease-out overflow-hidden shadow-md border border-foreground/10 hover:border-foreground/30'>
                    <div className='relative w-full h-48 '>
                        <Image
                            objectFit='cover'
                            alt='Artikkelbilde'
                            sanityData={post.image}
                            className='transform transition-transform duration-500 ease-out group-hover:scale-110'
                        />
                    </div>
                    <div className='p-4 md:p-6'>
                        <h3 className='mb-1 text-xl font-semibold text-foreground'>
                            {post.title}
                        </h3>
                        <p className='line-clamp-4 text-sm text-foreground'>
                            {post.intro}
                        </p>
                    </div>
                </div>
            </Link>
        </Button>
    )
}

export default PostCard
