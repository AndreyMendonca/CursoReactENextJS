import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <Button variant="outline">Clique aqui</Button>

      <div className="w-full max-w-2xl">
        <Alert variant={"destructive"} className="flex gap-3 items-center">
          <div className="size-4 rounded-full bg-red-600"></div>
          <div>
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>Sua senha deu problema</AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  )
}

export default Page;