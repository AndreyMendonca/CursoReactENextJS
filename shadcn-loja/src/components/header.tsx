import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartSideBar } from "@/components/cart/sidebar"

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-5 mx-3">
            <div className="flex gap-6 items-center">
                <Logo/>
                <ThemeToggle/>
            </div>
            <div className="">
                <CartSideBar/>
            </div>
        </header>
    )

}