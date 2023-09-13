import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Navbar } from './navbar';
import { SocialMediaBox } from './socialMediaBox';

import { useEffect, useState } from 'react';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavbarVisible(currentScrollPos <= prevScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header>
            <Navbar isNavbarVisible={isNavbarVisible} opened={opened} toggle={toggle} label={label} />

            <Drawer opened={opened} onClose={toggle} position="right" size="auto" className="md:hidden">
                <aside className="w-full bg-neutral-900 h-full grid gap-y-10 place-content-center text-white text-center px-4">
                    {opened ? (
                        <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#ffffff" className="absolute top-5 right-3" />
                    ) : null}

                    {/* <Link to='/empresa'> */}
                    <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        About Me
                    </span>
                    {/* </Link> */}
                    <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Portfolio
                    </span>
                    <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Services
                    </span>
                    <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Experience
                    </span>

                    <SocialMediaBox />
                </aside>
            </Drawer>
        </header >
    )
}