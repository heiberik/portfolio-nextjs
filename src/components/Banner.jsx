import Link from './Link'
import SanityImage from './Image'

const Banner = ({ sanityData }) => {
    return (
        <section className='relative flex h-screen w-screen max-w-[100%] overflow-hidden'>
            <div className='relative z-10 my-auto flex h-fit w-fit flex-col justify-center gap-4 pl-4 md:pl-8 xl:pl-16'>
                <h1 className='mb-2 max-w-full whitespace-pre-line text-3xl md:text-4xl xl:text-5xl flex flex-col'>
                    <span> Hei, </span>
                    <span> Jeg heter Henrik </span>
                    <span>
                        {' '}
                        og er{' '}
                        <span className='bg-gradient-to-r from-primary/90 via-primary to-primary/90 inline-block text-transparent bg-clip-text'>
                            {' '}
                            utvikler{' '}
                        </span>{' '}
                        og{' '}
                        <span className='bg-gradient-to-r from-primary/90 via-primary to-primary/90 inline-block text-transparent bg-clip-text'>
                            {' '}
                            jurist{' '}
                        </span>
                        .
                    </span>
                </h1>
                <p className='w-[50ch] max-w-full text-foreground-foreground md:w-[60ch]'>
                    {sanityData?.description}
                </p>
                <div className='relative mt-6 flex flex-wrap justify-start gap-2'>
                    {sanityData?.bannerButtons?.map((button) => (
                        <Link sanityData={button} key={button.url} size='lg' />
                    ))}
                </div>
            </div>
            <div className='absolute bottom-0 right-[-10vw] flex h-full w-1/2 flex-1 items-end justify-end opacity-40 md:right-[-5vw] dark:opacity-20'>
                <div className='absolute inset-0 h-full w-screen skew-x-12 scale-150 transform bg-gradient-to-t from-primary to-transparent md:skew-x-12 md:scale-100'></div>
                <SanityImage
                    sanityData={sanityData?.image}
                    priority={true}
                    overflowX='visible'
                    objectFit='cover'
                />
            </div>
            <div className='absolute bottom-0 left-0 z-20 h-16 w-screen bg-gradient-to-t from-background to-transparent'></div>
        </section>
    )
}

export default Banner
