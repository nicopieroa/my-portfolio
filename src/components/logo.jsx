import logoWhiteFont from '../assets/images/logo/np-whiteFont.png'

export function Logo({ width }) {
    return (
        <img src={logoWhiteFont} alt="My logo" style={{ width: width }} />
    )
}