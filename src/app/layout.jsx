import './globals.css'
import 'animate.css/animate.min.css'
import { getSettings } from '@/lib/sanityService'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Link from 'next/link'
import ThemeProvider from '@/components/themeProvider'
import { Analytics } from '@vercel/analytics/react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const settings = await getSettings()
const routes = [
    { title: 'Om meg', url: '/#om-meg', colorLink: undefined },
    { title: 'Prosjekter', url: '/prosjekter', colorLink: undefined },
    { title: 'Blogg', url: '/blogg', colorLink: undefined },
    { title: 'Kontakt', url: '/#kontakt', colorLink: undefined },
]

const routeElements = routes.map((route) => {
    return (
        <Button asChild variant='link' key={route.url} className='font-bold'>
            <Link
                href={route.url}
                className={`whitespace-nowrap p-3 text-center hover:opacity-80 ${
                    route.colorLink
                        ? 'bg-main-color text-main-color rounded hover:opacity-80 md:ml-3 2xl:px-6'
                        : '2xl:px-4'
                }`}
            >
                <p className='font-medium'> {route.title} </p>
            </Link>
        </Button>
    )
})

export const metadata = {
    title: settings.seo.titleSEO,
    description: settings.seo.descriptionSEO,
}

export default function RootLayout({ children }) {
    return (
        <html lang='no'>
            <body
                className={`${roboto.className} relative flex  min-h-screen flex-col`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                >
                    <Header>{routeElements}</Header>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
