"use client"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart-store"
import { CartItem } from "./item"
import { useState } from "react"
import { CheckoutDialog } from "../checkout.tsx/dialog"

export const CartSideBar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const {cart} = useCartStore(state => state);

    let subtotal = 0;
    for (let item of cart){
        subtotal += item.quantity * item.product.price;
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <ShoppingCart className="mr-2" />
                    <p>
                        Carrinho
                    </p>
                    {
                        cart.length > 0 && 
                        <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-center">
                        Carrinho
                    </SheetTitle>
                </SheetHeader>
                <div className="px-4">
                    <div className="flex flex-col gap-5 my-3">
                        {cart.map(item => (
                            <CartItem key={item.product.id} item={item}/>
                        ))}
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-between items-center text-xs">
                        <div>Subtotal:</div>
                        <div>R$ {subtotal.toFixed(2)}</div>
                    </div>
                    <Separator className="my-4" />
                    <div className="text-center">
                        <Button
                            onClick={() => setCheckoutOpen(true)}
                            disabled={subtotal === 0}
                        >Finalizar</Button>
                    </div>
                </div>
                <CheckoutDialog 
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                />
            </SheetContent>
        </Sheet>
    )
}