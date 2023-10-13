import email from '../assets/icons/socialMedia/email/email-whiteColor.svg'
// import instagram from '../assets/icons/socialMedia/instagram/instagram-whiteColor.svg'
import linkedin from '../assets/icons/socialMedia/linkedin/linkedin-whiteColor.svg'
import whattsapp from '../assets/icons/socialMedia/whattsapp/whattsapp-whiteColor.svg'
import x from '../assets/icons/socialMedia/x/logo.svg'
import github from '../assets/icons/socialMedia/github.svg'

export function SocialMediaBox() {
    return (
        <div id='socialMediaBox' className="w-8/12 sm:w-2/4 md:w-10/12 xl:w-9/12 xxl:w-6/12 p-4 md:p-6 flex items-center justify-center gap-x-4 md:gap-x-8 rounded-lg bg-gradient-to-br from-red-600 from-30% to-red-300 self-center">
            <a href="https://github.com/nicopieroa" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation w-[700px]'>
                <img src={github} alt="Github logo" className='w-full' />
            </a>
            <a href="https://www.linkedin.com/in/nicolaspieroniaranda/" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation'>
                <img src={linkedin} alt="Linkedin logo" className='w-full' />
            </a>
            <a href="https://wa.me/543426153815" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation '>
                <img src={whattsapp} alt="WhatsApp logo" className='w-full' />
            </a>
            {/* <a href="https://www.instagram.com/nicopieroa/" target="_blank" rel="noopener noreferrer" className='transition-all duration-200 grow-animation'>
                <img src={instagram} alt="Imagen del logo de instagram" className='w-full' />
            </a> */}
            <a href="https://twitter.com/nicopieroa" target="_blank" rel="noopener noreferrer" className='w-[600px] transition-all duration-200 grow-animation'>
                <img src={x} alt="X logo" className='w-full' />
            </a>
            <a href="#contactSection" className='transition-all duration-200 grow-animation'>
                <img src={email} alt="Email logo" className='w-full' />
            </a>
        </div>
    )
}