import { Paper, Title, Button } from '@mantine/core';

import projectData from '../assets/projects-data.json'

// export function ProjectCard() {
//     return (
//         <Paper className='w-75 h-110 flex flex-col justify-between items-start bg-cover bg-center rounded-lg p-8 shadow-[0_0_20px_rgba(249,115,22,0.5)]   grow-animation-card' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80)" }}>
//             <div>
//                 <Text className='font-semibold text-base text-white uppercase'>
//                     nature
//                 </Text>
//                 <Title order={3} className='font-bold text-white text-3xl mt-2'>
//                     Best forests to visit in North America
//                 </Title>
//             </div>

//             <div className='w-full flex flex-wrap gap-8 justify-between items-center'>
//                 <Button className='bg-orange-500 rounded-lg border border-orange-500 hover:bg-black hover:text-orange-500 transition-all duration-150'>
//                     See Project
//                 </Button>
//                 <Button className='bg-red-500 rounded-lg border border-red-500 hover:bg-black hover:text-red-500 transition-all duration-150'>
//                     See GitHub Repositorie
//                 </Button>
//             </div>
//         </Paper>
//     );
// }

export function Projects() {
    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div id="projects" className="text-white text-center flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 rounded-lg bg-[#202020] shadow-[0_0_20px_rgba(255,255,255,0.2)]">

                <h2 className='text-4xl font-semibold lg:text-5xl'>
                    Projects
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-32">
                    {projectData.map((card) => (
                        <Paper key={card.id} className='w-110 h-75 bg-neutral-900 flex flex-col gap-y-8 justify-center items-center bg-cover bg-center rounded-lg p-8 shadow-[0_0_20px_rgba(249,115,22,0.5)]   grow-animation-card'>
                            <img src={card.image.url} alt={card.image.alt} className='w-full' />

                            <div>
                                {/* <Text className='font-semibold text-base text-white uppercase'>
                                    nature
                                </Text> */}
                                <Title order={3} className='font-bold text-white text-3xl'>
                                    {card.name}
                                </Title>
                            </div>

                            <div className='w-full flex flex-wrap gap-8 justify-center items-center'>
                                <a href={card.url} target='_blank' rel='noreferrer'>
                                    <Button className='bg-orange-500 rounded-lg border border-orange-500 hover:bg-black hover:text-orange-500 transition-all duration-150'>
                                        See Project
                                    </Button>
                                </a>

                                <a href={card.repositorie} target='_blank' rel='noreferrer'>
                                    <Button className='bg-red-500 rounded-lg border border-red-500 hover:bg-black hover:text-red-500 transition-all duration-150'>
                                        See GitHub Repositorie
                                    </Button>
                                </a>
                            </div>
                        </Paper>
                    ))}
                </div>
            </div>
        </div >
    )
}