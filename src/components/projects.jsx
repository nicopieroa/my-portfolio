import { Paper, Title, Button } from '@mantine/core';

import projectData from '../assets/projects-data.json'

export function Projects() {

    // wm project:
    // {
    //     "id": 2,
    //     "name": "WM Argentina",
    //     "image": {
    //       "url": "/projects-images/wm-argentina.png",
    //       "alt": "WM Argentina image project"
    //     },
    //     "url": "https://wm-argentina.vercel.app/",
    //     "repository": "https://github.com/nicopieroa/wm-argentina/tree/main"
    //   },

    return (
        <div className='px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <div id="projects" className="text-white text-center flex flex-col gap-y-16 p-8 md:p-16 lg:p-32 rounded-lg bg-[#202020] shadow-[0_0_20px_rgba(255,255,255,0.2)]">

                <h2 className='text-4xl font-semibold lg:text-5xl'>
                    Projects
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-32">
                    {projectData.map((card) => (
                        <Paper key={card.id} className='w-110 h-75 bg-neutral-900 flex flex-col gap-y-8 justify-center items-center bg-cover bg-center rounded-xl p-8 shadow-[0_0_20px_rgba(229,38,38,0.5)]   grow-animation-card'>
                            <img src={card.image.url} alt={card.image.alt} className='w-full' />

                            <Title order={3} className='font-bold text-white text-3xl'>
                                {card.name}
                            </Title>

                            <div className='w-full flex flex-wrap gap-8 justify-center items-center'>
                                <a href={card.url} target='_blank' rel='noreferrer'>
                                    <Button className='bg-red-600 rounded-lg border border-red-600 hover:bg-black hover:text-red-600 transition-all duration-150'>
                                        See Project
                                    </Button>
                                </a>

                                <a href={card.repositorie} target='_blank' rel='noreferrer'>
                                    <Button className='bg-red-100 rounded-lg text-red-600 border-2 border-red-600 hover:bg-black hover:text-red-600 transition-all duration-150'>
                                        See GitHub Repository
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