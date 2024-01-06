import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button variant='secondary' size='icon' onClick={toggleTheme}>
            {theme === 'dark' ? (
                <Sun
                    size={50}
                    className='h-[1.2rem] w-[1.2rem]  transition-all'
                />
            ) : (
                <Moon
                    size={50}
                    className='h-[1.2rem] w-[1.2rem]  transition-all'
                />
            )}
            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}

export default ThemeToggler
