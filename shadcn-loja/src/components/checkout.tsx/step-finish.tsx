import { useCheckouStore } from "@/store/checkout-store"
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";
import { useCartStore } from "@/store/cart-store";

export const StepFinish = () => {
    const { name, address } = useCheckouStore(state => state);
    const { cart } = useCartStore(state => state);

    let orderProducts = [];
    for (let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`);
    }

    const message = `**Dados do cliente: **
            Nome: ${name}
            Endereço: ${address.street}, ${address.number} (${address.complement}) ${address.district}, ${address.city}/${address.state}
            -----
            **Pedido**
            ${orderProducts.join("\n")}
        `
    console.log(message)
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`
    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso Whatsapp para concluir.</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar para o Whatsapp</Link>
            </Button>
        </div>
    )
}