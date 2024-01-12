import Container from './ui/Container'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SpecialHeader from './ui/SpecialHeader'

const ContactMe = () => {
    return (
        <Container id='kontakt' variant='border'>
            <div className='z-10 flex flex-col text-foreground'>
                <SpecialHeader> Kontakt meg </SpecialHeader>
                <div className='flex flex-col gap-4 md:gap-6 items-center'>
                    <ContactMedias />
                    <ContactForm />
                </div>
            </div>
        </Container>
    )
}

const ContactMedias = () => {
    return (
        <div className='flex justify-center gap-4 md:gap-6'>
            <Button asChild variant='secondary' className='h-20 w-20'>
                <a
                    href='https://github.com/heiberik'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faGithub} size='xl' />
                </a>
            </Button>
            <Button asChild variant='secondary' className='h-20 w-20'>
                <a
                    href='https://linkedin.com/in/heiberik'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faLinkedin} size='xl' />
                </a>
            </Button>
        </div>
    )
}

const ContactForm = () => {
    return (
        <div className='z-20 col-span-2 flex w-full md:max-w-2xl flex-grow justify-center rounded-xl bg-primary/10 p-8'>
            <form className='w-full'>
                <div className='-mx-3 mb-6 flex flex-wrap'>
                    <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
                        <label
                            className='mb-1 ml-2 block text-xs font-bold uppercase tracking-wide'
                            htmlFor='grid-first-name'
                        >
                            Navn
                        </label>
                        <input
                            className='mb-3 block w-full appearance-none rounded border border-primary/30 bg-background/50 px-4 py-3 leading-tight focus:border-primary focus:outline-none'
                            id='grid-first-name'
                            type='text'
                            placeholder='Ditt navn'
                        />
                    </div>
                    <div className='w-full px-3 md:w-1/2'>
                        <label
                            className='mb-1 ml-2 block text-xs font-bold uppercase tracking-wide '
                            htmlFor='grid-last-name'
                        >
                            Mailadresse
                        </label>
                        <input
                            className='mb-3 block w-full appearance-none rounded border border-primary/30 bg-background/50 px-4 py-3 leading-tight focus:border-primary focus:outline-none'
                            id='grid-last-name'
                            type='email'
                            placeholder='Din mailadresse'
                        />
                    </div>
                </div>
                <div className='-mx-3 mb-2 flex flex-wrap'>
                    <div className='w-full px-3'>
                        <label
                            className='mb-1 ml-2 block text-xs font-bold uppercase tracking-wide '
                            htmlFor='grid-password'
                        >
                            Melding
                        </label>
                        <textarea
                            className=' no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-primary/30 bg-background/50 px-4  py-3 leading-tight focus:border-primary focus:outline-none'
                            id='message'
                            placeholder='Din melding...'
                        ></textarea>
                    </div>
                </div>
                <div className='md:flex md:items-center'>
                    <Button variant='default' className='px-10'>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactMe
