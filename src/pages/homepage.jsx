import { Header } from "../components/header";
import { Presentation } from "../components/presentation";
import { AboutMe } from "../components/aboutMe";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { ContactSection } from "../components/contactSection";
import { BannerSection } from "../components/bannerSection";

export function HomePage() {
    return (
        <div className='bg-neutral-900 flex flex-col gap-y-64 px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <Header />
            <BannerSection />
            <Presentation />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactSection />
        </div>
    )
}