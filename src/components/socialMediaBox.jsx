import email from '../assets/icons/email/email-whiteColor.svg'
import instagram from '../assets/icons/instagram/instagram-whiteColor.svg'
import linkedin from '../assets/icons/linkedin/linkedin-whiteColor.svg'
import x from '../assets/icons/x/logo.svg'
import whattsapp from '../assets/icons/whattsapp/whattsapp-whiteColor.svg'

export function SocialMediaBox() {
    return (
        <div className="flex items-center justify-center gap-x-4 bg-transparent border border-whtie py-2 px-3 rounded-lg">
            <a href="https://wa.me/543426153815" target="_blank" rel="noopener noreferrer" className='w-8 transition-all duration-200 grow-animation'>
                <img src={whattsapp} alt="Imagen del logo de whatsapp" className='w-full' />
            </a>
            <a href="https://www.instagram.com/nicopieroa/" target="_blank" rel="noopener noreferrer" className='w-9 transition-all duration-200 grow-animation'>
                <img src={instagram} alt="Imagen del logo de instagram" className='w-full' />
            </a>
            <a href="https://www.linkedin.com/in/nicolaspieroniaranda/" target="_blank" rel="noopener noreferrer" className='w-9 transition-all duration-200 grow-animation'>
                <img src={linkedin} alt="Imagen del logo de linkedin" className='w-full' />
            </a>
            <a href="https://twitter.com/nicopieroa" target="_blank" rel="noopener noreferrer" className='w-7 transition-all duration-200 grow-animation'>
                <img src={x} alt="Imagen del logo de X, antes twitter" className='w-full' />
            </a>
            <a href="#contactSection" className='w-9 transition-all duration-200 grow-animation'>
                <img src={email} alt="Imagen del logo de un email, casilla de correo" className='w-full' />
            </a>
        </div>
    )
}