import html from '../assets/icons/skills/html.svg'
import css from '../assets/icons/skills/css.svg'
import javaScript from '../assets/icons/skills/javaScript.svg'
import react from '../assets/icons/skills/reactjs.svg'
import git from '../assets/icons/skills/git.svg'
import github from '../assets/icons/skills/github.svg'
import tailwindcss from '../assets/icons/skills/tailwindcss.svg'
import mantine from '../assets/icons/skills/mantine.svg'
import emailjs from '../assets/icons/skills/emailjs.png'

export function Skills() {
    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div className='relative z-0 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] text-white text-center'>
                <div className="absolute z-10 bg-[#202020] inset-0 rounded-lg"></div>
                <div className="absolute z-20 z-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 opacity-60 inset-0 rounded-lg"></div>

                <div className='relative z-40 flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 rounded-lg'>
                    <h2 className='text-4xl font-semibold lg:text-5xl'>
                        Skills
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-8 bg-transparent rounded-lg">
                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={html} alt="Logo de html" className='w-20' />

                            <h3 className='font-medium'>
                                HTML
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={css} alt="Logo de css" className='w-20' />

                            <h3 className='font-medium'>
                                CSS
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={javaScript} alt="Logo de javaScript" className='w-20' />

                            <h3 className='font-medium'>
                                JavaScript
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={react} alt="Logo de react.js" className='w-20' />

                            <h3 className='font-medium'>
                                React JS
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={git} alt="Logo de git" className='w-20' />

                            <h3 className='font-medium'>
                                Git
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={github} alt="Logo de github" className='w-20' />

                            <h3 className='font-medium'>
                                GitHub
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={tailwindcss} alt="Logo de tailwind" className='w-20' />

                            <h3 className='font-medium'>
                                Tailwind CSS
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={mantine} alt="Logo de mantine" className='w-20' />

                            <h3 className='font-medium'>
                                Mantine
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-y-4'>
                            <img src={emailjs} alt="Logo de emailjs" className='w-20' />

                            <h3 className='font-medium'>
                                Email JS
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}