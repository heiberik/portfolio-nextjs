"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import ThemeToggler from './themeToggler';


const toggleHeaderChange = (setnavColor, setnavSize) => {

    const pathname = window.location.pathname
    const pathIsRoot = pathname === "/" || pathname === "/?"
    const scrollDist = window.scrollY
    const showingMenu = document.body.querySelector("#hamburger-menu")
    const makeTransparent = pathIsRoot && scrollDist < 20 && !showingMenu

    if (makeTransparent) {
        setnavColor("bg-transparent")
        setnavSize("6rem")
    }
    else {
        setnavColor("bg-secondary")
        setnavSize("5rem")
    }
}


const Header = ({ children }) => {

    const pathname = usePathname()
    const pathRoot = pathname === "/" || "/?"

    const [navSize, setnavSize] = useState(pathRoot ? "6rem" : "5rem");
    const [navColor, setnavColor] = useState(pathRoot ? "bg-transparent" : "bg-secondary");
    const [showDropdown, setShowDropdown] = useState(false)

    const listenScrollEvent = (e) => {
        toggleHeaderChange(setnavColor, setnavSize)
    }

    const handleMenuClick = () => {

        let check = null
        setShowDropdown(s => {
            check = s
            return !s
        })

        if (!check) {
            setnavColor("bg-secondary")
            setnavSize("5rem")
        }
        else {
            setTimeout(() => {
                toggleHeaderChange(setnavColor, setnavSize)
            }, 0)
        }
    }

    useEffect(() => {
        setShowDropdown(false)
        toggleHeaderChange(setnavColor, setnavSize)
    }, [pathname])

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent, true);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [pathname]);

    const headerStyle = {
        height: navSize,
        transition: "all 0.8s"
    }

    if (pathname.includes("/admin")) return null
    return (
        <header style={headerStyle} className={`flex flex-wrap justify-between ${navColor} place-items-center fixed top-0 right-0 left-0 z-20`}>
            <Link href="/" onClick={() => setShowDropdown(false)} className="h-full flex items-center ml-4 md:ml-8 hover:opacity-80">
                <p className='text-xl'> Heiberik </p>
            </Link>
            <nav className='flex gap-2 items-center mr-4 '>
                <div className='flex-1 justify-center hidden md:flex ml-4'>
                    {children}
                </div>
            </nav>
            <div className='mr-4 md:mr-8 hidden md:block'>
                <ThemeToggler />
            </div>
            <div className='flex-1 justify-end flex md:hidden mr-4 md:mr-8 '>
                {!showDropdown && <button className='flex justify-center items-center text-muted-foreground' aria-label="Vis meny" onClick={handleMenuClick}>
                    <HiBars3 size={40} />
                </button>}
                {showDropdown && <button className='flex justify-center items-center text-muted-foreground' aria-label="Lukk meny" onClick={handleMenuClick}>
                    <HiXMark size={40} />
                </button>}
            </div>
            {showDropdown && <div className='w-screen max-w-[100%] h-[200vh] justify-start flex flex-col gap-4 px-4 bg-secondary' id='hamburger-menu'>
                {children}
                <div className='w-full flex justify-center'>
                    <ThemeToggler />
                </div>
            </div>}
        </header>
    )
}

export default Header
