
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";

type Tab = {
    title: string;
    value: string;
    products: Product[];
}

export const ProductsTab = async () => {

    const products = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'tameki',
            products: products.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combinados',
            value: 'pack',
            products: products.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'bevarage',
            products: products.filter(item => item.category === 'bevarage')
        }
    ];

    return (
        <Tabs defaultValue={tabs[0].value}>
            <TabsList className="flex w-full">
                {tabs.map(item => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex-1">
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(item => (
                <TabsContent 
                    key={item.value}
                    value={item.value} 
                    className="mt-6"
                >
                    {item.products.length > 0 &&
                        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 &&
                        <ProductEmpty/>
                    }
                </TabsContent>
            ))}
        </Tabs>
    );
}