import NextImage from 'next/image';
import { urlForImage } from '../../sanity/lib/image'
import imageToBase64 from 'image-to-base64'


const Image = async ({ sanityData, priority = false, objectFit = "fill", overflowX = "hidden" }) => {

    if (!sanityData?.asset) return null
    const base64 = "data:image/jpeg;base64," + await imageToBase64(urlForImage(sanityData?.asset).width(500).height(500).blur(1).url())

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