import logoWhiteFont from '../assets/images/logo/np-whiteFont.png'

export function Logo({ width }) {
    return (
        <img src={logoWhiteFont} alt="My logo" className='transition-all duration-150' style={{ width: width }} />
    )
}