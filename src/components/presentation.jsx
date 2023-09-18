import me from '../assets/images/me.png'
import { SocialMediaBox } from './socialMediaBox'

export function Presentation() {
    return (
        <div className='text-white text-center flex flex-col gap-y-32'>
            <div className='bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex justify-center items-center rounded-lg'>
                <img src={me} alt="An image of my face maded with AI" className='w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xxl:w-6/12' />
            </div>

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
        </div >
    )
}