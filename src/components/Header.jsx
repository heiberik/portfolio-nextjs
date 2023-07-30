"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import ThemeToggler from './themeToggler';
import { Button } from './ui/button';

const HEADER_HEIGHT_NORMAL = "5rem";
const HEADER_HEIGHT_ROOT = "6rem";
const HEADER_BACKGROUND_NORMAL = "bg-normal";
const HEADER_BACKGROUND_TRANSPARENT = "bg-transparent";
const OPACITY_100 = "opacity-100";
const OPACITY_95 = "opacity-95";

const toggleHeaderChange = (setNavColor, setNavSize) => {

    const pathname = window.location.pathname
    const pathIsRoot = pathname === "/" || pathname === "/?"
    const scrollDist = window.scrollY
    const showingMenu = document.body.querySelector("#hamburger-menu")
    const makeTransparent = pathIsRoot && scrollDist < 20 && !showingMenu

    if (makeTransparent) {
        setNavColor("bg-transparent")
        setNavSize("6rem")
    }
    else {
        setNavColor("bg-normal")
        setNavSize("5rem")
    }
}


const Header = ({ children }) => {
    
    const pathname = usePathname();
    const pathRoot = pathname === "/" || "/?";

    const [navSize, setNavSize] = useState(pathRoot ? HEADER_HEIGHT_ROOT : HEADER_HEIGHT_NORMAL);
    const [navColor, setNavColor] = useState(pathRoot ? HEADER_BACKGROUND_TRANSPARENT : HEADER_BACKGROUND_NORMAL);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMenuClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setIsDropdownOpen(false);
        toggleHeaderChange(setNavColor, setNavSize);
    }, [pathname]);

    useLayoutEffect(() => {
        const listenScrollEvent = () => {
            toggleHeaderChange(setNavColor, setNavSize);
        };
        window.addEventListener("scroll", listenScrollEvent, true);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [pathname]);

    const headerStyle = {
        height: navSize,
        transition: "all 0.8s",
    };

    const opacity = isDropdownOpen ? OPACITY_100 : OPACITY_95;
    const background = navColor === HEADER_BACKGROUND_NORMAL ? `bg-muted ${opacity}` : HEADER_BACKGROUND_TRANSPARENT;

    if (pathname.includes("/admin")) return null;
    return (
        <header style={headerStyle} className={`flex flex-wrap justify-between ${background} place-items-center fixed top-0 right-0 left-0 z-20`}>
            <Button asChild variant="link" className="flex-1 flex justify-start">
                <Link href="/" onClick={() => setShowDropdown(false)} className="h-fit p-3 flex items-center ml-1 md:ml-5 hover:opacity-80">
                    <p className='h-fit text-stroke text-xl font-extrabold'> Heiberik </p>
                </Link>
            </Button>
            <nav className='flex gap-2 items-center mr-4 '>
                <div className='flex-1 justify-center hidden md:flex ml-4'>
                    {children}
                </div>
            </nav>
            <div className='mr-4 md:mr-8 ml-4 md:ml-8 flex-1 hidden md:flex justify-end'>
                <ThemeToggler />
            </div>
            <div className='flex-1 justify-end flex md:hidden mr-4 md:mr-8 h-[inherit]'>
                <button className='flex justify-center items-center text-muted-foreground' aria-label={showDropdown ? "Lukk meny" : "Vis meny"} onClick={handleMenuClick}>
                    {showDropdown ? <HiXMark size={40} /> : <HiBars3 size={40} />}
                </button>
            </div>
            {showDropdown && <div className={`w-screen h-screen ${background} justify-start flex flex-col gap-4 px-4`} id='hamburger-menu'>
                {children}
                <div className='w-full flex justify-center'>
                    <ThemeToggler />
                </div>
            </div>}
        </header>
    )
}

export default Header
