import { Header } from "@/components/header";
import { PizzaList } from "@/components/home/pizza.list";
import { api } from "@/lib/axios";

export default async function Page() {
  const pizzaReq = await api.get('/pizzas')
  const pizzas = pizzaReq.data ?? [];

  return (
    <div>
      <Header/>
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas} />
      </main>
    </div>
  )
}