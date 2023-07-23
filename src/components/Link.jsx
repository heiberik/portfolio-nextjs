import NextLink from "next/link"
import { Button } from "./ui/button"

const Link = ({ sanityData }) => {

    const important = !!sanityData.important

    return (
        <NextLink href={sanityData.url}>
            <Button variant={important ? "" : "outline"}>
                {sanityData.text}
            </Button>
        </NextLink>
    )
}

export default Link