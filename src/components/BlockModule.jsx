import SanityImage from "./Image"
import RichText from "./RichText"

const BlockModule = ({ data }) => {

    const { _type: blockType } = data

    if (blockType === "richTextObject") {
        return <RichText sanityData={data?.richText} />
    }

    if (blockType === "image") {
        return <div className="relative w-full aspect-video mt-8 md:mt-12">
            <SanityImage sanityData={data} objectFit="cover"/>
        </div>
    }

    return null
}

export default BlockModule