import { Burger, Button } from '@mantine/core';

import { Logo } from './logo';

export function Navbar({ isNavbarVisible, opened, toggle, label }) {

    return (
        <nav className={`w-full flex justify-between items-center px-twoDotFivePercent py-4 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent fixed top-0 left-0 bg-neutral-900 shadow-[0_12px_20px_rgba(0,0,0,0.1)] transition-opacity duration-300 z-10 
        ${isNavbarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

            {/* <Link to='/'> */}
            <Logo width="64px" />
            {/* </Link> */}

            <div className='hidden md:flex items-center gap-x-8'>
                <div className='flex items-center gap-x-4 text-white text-lg font-semibold'>
                    {/* <Link to='/empresa'> */}
                    <span className='transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        About Me
                    </span>
                    {/* </Link> */}
                    <span className='transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Portfolio
                    </span>
                    <span className='transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Services
                    </span>
                    <span className='transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Experience
                    </span>
                </div >

                <Button className='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-700 hover:to-red-900'>
                    Contact Me
                </Button>
            </div>

            <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="white" className='md:hidden' />
        </nav >
    )
}