import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Henrik Heiberg',
    description: 'Henrik Heiberg sin personlige hjemmeside og blogg som utvikler og jurist.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="no">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
