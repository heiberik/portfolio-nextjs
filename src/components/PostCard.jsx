import { getPostForPreview } from "@/lib/sanityService";
import Link from "next/link";
import Image from "./Image";
import { Button } from "./ui/button";

const PostCard = async ({ sanityData }) => {
    const post = await getPostForPreview(sanityData._ref);

    if (!post) return null;
    return (
        <Button asChild variant="link" size="fit">
            <Link href={post.slug.current}>
            <div className="w-full group bg-card rounded-lg text-secondary-foreground transform transition duration-300 ease-out overflow-hidden shadow-md border border-transparent hover:border-foreground/10">
                    <div className="relative w-full h-48 overflow-hidden">
                        <Image
                            objectFit="cover"       
                            sanityData={post.image}
                            className="transform group-hover:scale-110 transition-transform duration-500 ease-out" />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-xl mb-1 text-card-foreground">
                            {post.title}
                        </h3>
                        <p className="text-sm line-clamp-4 text-card-foreground/60">
                            {post.intro}
                        </p>
                    </div>
                </div>
            </Link>
        </Button>
    );
};

export default PostCard;
