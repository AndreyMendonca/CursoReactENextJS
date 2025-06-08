
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductsTab = () => {
    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex w-full">
                <TabsTrigger value="tab1" className="flex-1">
                    Tab1
                </TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1">
                    Tab2
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                Tab1
            </TabsContent>
            <TabsContent value="tab2">
                Tab2
            </TabsContent>
        </Tabs>
    );
}