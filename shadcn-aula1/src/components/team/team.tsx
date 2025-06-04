import { members } from "@/data/members"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { TeamItem } from "./team-item"

export const Team = () => {
    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Membros do time</CardTitle>
                <CardDescription>Convide os membros do seu time</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {members.map(item => (
                    <TeamItem key={item.id} data={item}/>
                ))}
                
            </CardContent>
        </Card>
    )
}