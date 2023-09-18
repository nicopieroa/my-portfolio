import { Header } from "../components/header";
import { Presentation } from "../components/presentation";
import { AboutMe } from "../components/aboutMe";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";

export function HomePage() {
    return (
        <div className='bg-neutral-900 flex flex-col gap-y-64 px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <Header />
            <Presentation />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    )
}