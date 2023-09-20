import email from '../assets/icons/socialMedia/email/email-whiteColor.svg'
import instagram from '../assets/icons/socialMedia/instagram/instagram-whiteColor.svg'
import linkedin from '../assets/icons/socialMedia/linkedin/linkedin-whiteColor.svg'
import whattsapp from '../assets/icons/socialMedia/whattsapp/whattsapp-whiteColor.svg'
import x from '../assets/icons/socialMedia/x/logo.svg'

export function SocialMediaBox() {
    return (
        <div id='socialMediaBox' className="w-3/4 sm:w-2/4 md:w-11/12 xl:w-11/12 xxl:w-8/12 p-4 md:p-8 flex items-center justify-center gap-x-4 md:gap-x-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 self-center">
            <a href="https://wa.me/543426153815" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation '>
                <img src={whattsapp} alt="Imagen del logo de whatsapp" className='w-full' />
            </a>
            <a href="https://www.instagram.com/nicopieroa/" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation'>
                <img src={instagram} alt="Imagen del logo de instagram" className='w-full' />
            </a>
            <a href="https://www.linkedin.com/in/nicolaspieroniaranda/" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation'>
                <img src={linkedin} alt="Imagen del logo de linkedin" className='w-full' />
            </a>
            <a href="https://twitter.com/nicopieroa" target="_blank" rel="noopener noreferrer" className='w-[600px] transition-all duration-200 grow-animation'>
                <img src={x} alt="Imagen del logo de X, antes twitter" className='w-full' />
            </a>
            <a href="#contactSection" className='transition-all duration-200 grow-animation'>
                <img src={email} alt="Imagen del logo de un email, casilla de correo" className='w-full' />
            </a>
        </div>
    )
}