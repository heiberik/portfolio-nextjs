import { getPostForPreview } from "@/lib/sanityService";
import Link from "next/link"
import Image from "./Image";
import { Button } from "./ui/button";

const PostPreview = async ({ sanityData }) => {

    const post = await getPostForPreview(sanityData._ref)

    if (!post) return null
    return (
        <Button asChild variant="link" size="fit">
            <Link href={post.slug.current}>
                <div className="flex flex-col overflow-hidden border-4 border-transparent">
                    <div className="w-full h-48 relative rounded overflow-hidden">
                        <Image
                            objectFit="cover"
                            sanityData={post.image} />
                    </div>
                    <div className="my-4">
                        <h2 className="font-bold text-2xl">
                            {post.title}
                        </h2>
                        <p className="line-clamp-4 text-muted-foreground text-sm">
                            {post.intro}
                        </p>
                    </div>

                </div>
            </Link>
        </Button>
    )
}

export default PostPreview