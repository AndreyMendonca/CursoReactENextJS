import { Level } from "@/helpers/imc"

type Props = {
    item: Level;
    color: string
}

export const GridItem = ({ item, color }: Props) => {
    return (
        <div className="flex-1 text-white border-2 rounded-2xl flex justify-center items-center flex-col p-5" style={{ background: color }}>
            <div className="flex items-center justify-center rounded-full p-5 bg-black/10">
                {item.icon === 'up' && <img src="/up.png" width="30" height="30" />}
                {item.icon === 'down' && <img src="/down.png" width="30" />}
            </div>
            <div className="text-2xl font-bold mt-1">{item.title}</div>
            <div className="text-sm mt-2">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
            
        </div>
    )
}