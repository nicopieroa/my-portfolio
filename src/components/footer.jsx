import { Logo } from "./logo";

export function Footer() {
    return (
        <div className="px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent">
            <footer id="projects" className="w-full flex justify-center items-center border-t border-neutral-800 bg-transparent p-32">
                <Logo width='120px' />

            </footer>
        </div>
    )
}