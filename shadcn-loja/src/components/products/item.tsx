"use client"
import { Product } from "@/types/product"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { toast } from "sonner"
import { useCartStore } from "@/store/cart-store"

type Props = {
    item: Product
}

export const ProductItem = ({ item }: Props) => {

    const {upsertCartItem} = useCartStore(state=> state);

    const handleAddButton = () => {
        upsertCartItem(item, 1);
        const id = toast("Produto adicionado ao carrinho", {
            description: item.name,
            action: {
                label: 'Fechar',
                onClick: () => {
                    toast.dismiss(id);
                }
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