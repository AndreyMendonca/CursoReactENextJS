import { Team } from "@/components/team/team";
import { ThemeToggle } from "@/components/theme-toggle";


const Page = () =>{
    return (
        <div className="container mx-auto flex flex-col gap-2 justify-center items-center h-lvh">
            <ThemeToggle/>
            <Team/>
        </div>
    )
}

export default Page;