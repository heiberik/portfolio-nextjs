import NextLink from 'next/link'
import { Button } from './ui/button'

const Link = ({ sanityData, size }) => {
    const important = !!sanityData?.important

    return (
        <Button asChild variant={important ? '' : 'secondary'} size={size}>
            <NextLink href={sanityData?.url} scroll={false}>
                {sanityData?.text}
            </NextLink>
        </Button>
    )
}

export default Link
