import { SocialMediaBox } from './socialMediaBox'

export function Presentation() {
    return (
        <div className='text-white text-center flex flex-col gap-y-32 p-8 md:p-16 lg:p-32 px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>

            <div className='flex flex-col gap-y-16 font-bold leading-normal italic text-5xl lg:text-6xl' style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
                <h1>
                    Hi, I am Nicolás Pieroni Aranda!
                </h1>

                <h1>
                    I am a Web Developer
                </h1>
            </div>

            <div className='hidden md:flex flex-col gap-y-16 bg-[#202020] p-8 md:p-16 lg:p-32 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className='text-4xl font-semibold lg:text-5xl'>
                    Let's talk
                </h2>

                <SocialMediaBox />
            </div>
        </div >
    )
}