import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Navbar } from './navbar';
import { SocialMediaBox } from './socialMediaBox';
import { DonwloadResumeButton } from './downloadResumeButton';

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
                <aside className="w-full bg-black h-full flex flex-col gap-y-16 justify-center items-center text-white">
                    {opened ? (
                        <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#ffffff" className="absolute top-5 right-3" />
                    ) : null}

                    {/* <Link to='/empresa'> */}
                    <a href="#aboutMe" className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer' onClick={toggle}>
                        About Me
                    </a>
                    {/* </Link> */}
                    <a href='#projects' className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer' onClick={toggle}>
                        Projects
                    </a>
                    {/* <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Services
                    </span>
                    <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                        Experience
                    </span> */}

                    <SocialMediaBox />

                    <DonwloadResumeButton />
                </aside>
            </Drawer>
        </header >
    )
}