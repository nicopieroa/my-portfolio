export function AboutMe() {
    return (
        <div className="px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent">
            <div id="aboutMe" className='flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 bg-[#202020] text-white text-center rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                <h2 className='text-4xl font-semibold lg:text-5xl'>
                    About Me
                </h2>

                <div className='flex flex-col gap-y-8 text-base md:text-lg xl:text-xl'>
                    <p>Hello! 🙋 My name is Nicolás, and I'm a Web Developer.</p>
                    <p>Let me tell you a bit about myself. I'm from the city of Santa Fe, Santa Fe province, Argentina.</p>
                    <p>Currently, I'm working on small web projects using React.js and TailwindCSS. I'm handling the front end, fetching data, integrating email.js for forms, using React Router for navigation between different pages, and employing Mantine as a library for certain components.</p>
                    <p>Furthermore, I'm pursuing a degree in Computer Science at Universidad Siglo 21. 💻 At the same time, I'm constantly self-learning, acquiring new tools and technologies to enhance my professional growth. 📚</p>
                </div>
            </div>
        </div>
    )
}