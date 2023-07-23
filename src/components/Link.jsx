import NextLink from "next/link"

const Link = ({ sanityData }) => {

    const important = !!sanityData.important

    return (
        <NextLink href={sanityData.url} className={`w-fit whitespace-nowrap hover:bg-opacity-80 ${important ? "bg-action-important-color text-action-important-color" : "bg-action-color text-action-color"} text-center p-4 px-6 2xl:p-5 2xl:px-8 text-lg mt-4`}> {sanityData.text} </NextLink>
    )
}

export default Link