import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 mx-3">
            <div className="flex gap-6 items-center">
                <Logo/>
                <ThemeToggle/>
            </div>
            <div className="">
                ...
            </div>
        </header>
    )

}