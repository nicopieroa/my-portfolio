import me from '../assets/images/me 2.png'

export function BannerSection() {
    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div className='bg-gradient-to-br from-red-600 from-20% to-red-300 flex justify-center items-center rounded-lg'>
                <img src={me} alt="An image of my face maded with AI" className='w-full sm:w-10/12 md:w-9/12 lg:w-7/12 xxl:w-5/12' />
            </div>
        </div>
    )
}