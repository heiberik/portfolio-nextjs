import NextImage from 'next/image';
import { urlForImage } from '../../sanity/lib/image'
import fetch from 'node-fetch';



const Image = async ({ sanityData, priority = false, objectFit = "fill", overflowX = "hidden", ...props }) => {

    if (!sanityData?.asset) return null

    async function getBase64(url) {
        const response = await fetch(url);
        const buffer = await response.buffer();
        return Buffer.from(buffer).toString('base64');
    }

    const url = urlForImage(sanityData.asset).width(500).height(500).blur(1).url()
    const base64 = "data:image/jpeg;base64," + await getBase64(url)

    return (
        <>
            {sanityData?.asset && (
                <NextImage
                    src={urlForImage(sanityData.asset).url()}
                    alt={sanityData.alt || "Et bilde uten alternativ tekst, whoops"}
                    fill={true}
                    priority={priority}
                    style={{ objectFit, overflowX }}
                    placeholder="blur"
                    {...props}
                    sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
                blurDataURL={base64}
                />
            )}
        </>
    )
}

export default Image