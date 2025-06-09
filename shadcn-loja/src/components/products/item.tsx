"use client"
import { Product } from "@/types/product"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { toast } from "sonner"

type Props = {
    item: Product
}

export const ProductItem = ({item}:Props) =>{

    const handleAddButton = () =>{
        toast("Produto adicionado ao carrinho",{
            description: item.name,
            action:{
                label: 'X',
                onClick: () => {}
            }
        })
    }

    return (
        <Card className="p-2">
            <div className="rounded-md overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-32 object-cover"     
                />
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-md opacity-50">R$ {item.price.toFixed(2)}</p>
                <Button 
                    variant="outline"
                    onClick={handleAddButton}
                >Adicionar</Button>
            </div>
        </Card>
    )
}