import './globals.css'
import { getRoutes, getSettings } from '@/lib/sanityService'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Link from 'next/link'
import ThemeProvider from "@/components/themeProvider"
import { Analytics } from '@vercel/analytics/react';


const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

const settings = await getSettings()
const routes = await getRoutes()

export const metadata = {
    title: settings.seo.titleSEO,
    description: settings.seo.descriptionSEO,
}

export default function RootLayout({ children }) {
    return (
        <html lang="no">
            <body className={`${roboto.className} min-h-screen relative  flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header>
                        {routes.map((route) => {
                            return <Link key={route.url} href={route.url} className={`hover:opacity-80 p-3 text-center whitespace-nowrap ${route.colorLink ? "bg-main-color text-main-color rounded md:ml-3 hover:opacity-80 2xl:px-6" : "2xl:px-4"}`}>{route.title}</Link>
                        })}
                    </Header>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
