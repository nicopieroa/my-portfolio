import { SocialMediaBox } from './socialMediaBox'

export function Presentation() {
    return (
        <div className='text-white text-center flex flex-col gap-y-32 px-twoDotFivePercent py-8 lg:p-32 '>

            <div className='flex flex-col gap-y-16 font-bold leading-normal italic text-5xl lg:text-6xl' style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
                <h1>
                    Hi, I am Nicolás Pieroni Aranda!
                </h1>

                <h1>
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