import me from '../assets/images/me.png'
import html from '../assets/icons/skills/html.svg'
import css from '../assets/icons/skills/css.svg'
import javaScript from '../assets/icons/skills/javaScript.svg'
import react from '../assets/icons/skills/reactjs.svg'
import git from '../assets/icons/skills/git.svg'
import github from '../assets/icons/skills/github.svg'
import tailwindcss from '../assets/icons/skills/tailwindcss.svg'
import mantine from '../assets/icons/skills/mantine.svg'
import emailjs from '../assets/icons/skills/emailjs.png'
import { SocialMediaBox } from './socialMediaBox'

export function Presentation() {
    return (
        <main className='bg-neutral-900 text-white text-center flex flex-col gap-y-32 px-twoDotFivePercent py-64 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div className='bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex justify-center items-center rounded-lg'>
                <img src={me} alt="An image of my face maded with AI" className='w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xxl:w-6/12' />
            </div>
            {/*  */}

            <div className='flex flex-col gap-y-16 font-bold italic' style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
                <h1 className='text-4xl sm:text-5xl'>
                    Hi, I am Nicolás Pieroni Aranda!
                </h1>

                <h1 className='text-4xl sm:text-5xl'>
                    I am a Web Developer
                </h1>
            </div>

            <div className='hidden md:flex flex-col gap-y-8 bg-[#202020] py-16 px-2 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className='text-3xl font-semibold sm:text-4xl'>
                    Let's talk
                </h2>

                <SocialMediaBox />
            </div>

            <div id="aboutMe" className='flex flex-col gap-y-8 bg-[#202020] py-16 px-2 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className='text-3xl font-semibold sm:text-4xl'>
                    About Me
                </h2>

                <div className='flex flex-col gap-y-8 text-base'>
                    <p>Hello! 🙋 My name is Nicolás, and I'm a Web Developer.</p>
                    <p>Let me tell you a bit about myself. I'm from the city of Santa Fe, Santa Fe province, Argentina.</p>
                    <p>Currently, I'm working on small web projects using React.js and TailwindCSS. I'm handling the front end, fetching data, integrating email.js for forms, using React Router for navigation between different pages, and employing Mantine as a library for certain components.</p>
                    <p>Furthermore, I'm pursuing a degree in Computer Science at Universidad Siglo 21. 💻 At the same time, I'm constantly self-learning, acquiring new tools and technologies to enhance my professional growth. 📚</p>
                </div>
            </div>

            <div className='relative rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <div className="absolute z-10 bg-[#202020] inset-0 rounded-lg"></div>
                <div className="absolute z-20 z-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 opacity-60 inset-0 rounded-lg"></div>

                <div className='relative z-40 flex flex-col gap-y-8  py-16 px-2 rounded-lg'>
                    <h2 className='text-3xl font-semibold sm:text-4xl'>
                        Skills
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-8 bg-transparent py-16 px-2 rounded-lg">
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
        </main >
    )
}