"use client"

import { Product } from "@/generated/prisma"
import { PizzaItem } from "./pizza-item";

type Props = {
    pizzas: Product[];
}
export const PizzaList = ({pizzas}: Props) =>{
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pizzas.map((pizza) => (
                <PizzaItem
                    key={pizza.id}
                    data={pizza}
                />
            ))}
        </div>
    )
}