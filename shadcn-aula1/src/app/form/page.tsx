import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () =>{
    return(
        <>
        <div className="flex w-full min-h-screen justify-center items-center">
            <ThemeToggle/>
            <LoginForm />
        </div>
        </>

    )
}

export default Page;