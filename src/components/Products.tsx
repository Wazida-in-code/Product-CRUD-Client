import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductType  {
    _id: string,
    name: string,
    price: number,
    image: string
}


const Products = ({products}:{products: ProductType[]}) => {
    console.log(products);
  return (
    <div className="grid grid-cols-3 gap-5 px-5 my-5">
      {products.map((product) => <Card key={product._id} className="hover:border hover:border-amber-50 relative mx-auto w-full max-w-sm pt-0  bg-black/35">
            <div className="absolute inset-0 z-30 aspect-video" />
            <Image alt="image" src={product.image} width={100} height={30} />
            <CardHeader>
              <CardAction></CardAction>
              <CardTitle className="text-white">{product.name}</CardTitle>
              <CardDescription>{product._id}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">{product.price}</Button>
            </CardFooter>
          </Card>
        
      )}
    </div>
  );
};

export default Products;
