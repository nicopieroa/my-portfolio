import dropdownIcon from '../assets/icons/dropdownArrow.svg'

import { Button, Menu } from '@mantine/core'

export function DonwloadResumeButton() {
    return (
        <Menu trigger="hover" openDelay={100} closeDelay={200} className="w-auto h-16 bg-red-100 rounded-lg text-red-600 border-2 border-red-600 hover:bg-black hover:text-red-600 transition-all duration-150">
            <Menu.Target>
                <Button className='flex items-center text-xl hover:bg-transparent'>
                    <span>Download Resume</span>
                    <img src={dropdownIcon} alt="Flecha de despliegue de menu" className="w-10 ml-4" />
                </Button>
            </Menu.Target>

            <Menu.Dropdown className='bg-red-100 rounded-lg text-red-600 border-2 border-red-600 transition-all duration-150'>
                {/* <Menu.Label className='text-sm'>
                            Categoria 1
                        </Menu.Label> */}
                <Menu.Item className='bg-red-100 rounded-lg text-red-600 border-2 border-red-600 hover:bg-black hover:text-red-600 transition-all duration-150 text-lg font-semibold py-4 px-6'>
                    <a href="/Nicolás Pieroni Aranda Resume.pdf" download>
                        English
                    </a>
                </Menu.Item>

                <Menu.Divider className='border-red-200' />

                <Menu.Item className='bg-red-100 rounded-lg text-red-600 border-2 border-red-600 hover:bg-black hover:text-red-600 transition-all duration-150 text-lg font-semibold py-4 px-6'>
                    <a href="/Nicolás Pieroni Aranda CV.pdf" download>
                        Spanish
                    </a>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}