import me from '../assets/images/me.png'

export function BannerSection() {
    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div className='bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex justify-center items-center rounded-lg'>
                <img src={me} alt="An image of my face maded with AI" className='w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xxl:w-6/12' />
            </div>
        </div>
    )
}