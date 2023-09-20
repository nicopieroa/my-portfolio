import logoWhiteFont from '../assets/images/logo/np-whiteFont.png'

export function Logo({ width }) {
    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <img src={logoWhiteFont} alt="My logo" className='transition-all duration-150 cursor-pointer' style={{ width: width }} onClick={handleLogoClick} />
    )
}