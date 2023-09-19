import { Header } from "../components/header";
import { BannerSection } from "../components/bannerSection";
import { Presentation } from "../components/presentation";
import { AboutMe } from "../components/aboutMe";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { ContactSection } from "../components/contactSection";
import { Footer } from "../components/footer";

export function HomePage() {
    return (
        // px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent
        <div className='bg-neutral-900 flex flex-col gap-y-64'>
            <Header />
            <BannerSection />
            <Presentation />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactSection />
            <Footer />
        </div>
    )
}