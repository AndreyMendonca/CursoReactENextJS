import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Página inicial'
}

const Page = () =>{
  return (
    <div className="h-screen flex items-center justify-center">
      Particularidades Next
    </div>
  )
}

export default Page;