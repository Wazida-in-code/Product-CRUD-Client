"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const EditDialogCard = ({ product }: { product: ProductType }) => {
  const handleEditProduct = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/products/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger render={<Button variant="outline">Edit</Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Product Name</DialogTitle>
            <DialogDescription>
              Make changes to your Product here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditProduct}>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1"></Label>
                <Input id="name-1" name="name" defaultValue={product.name} />
              </Field>
              <Field>
                <Label htmlFor="username-1">Price</Label>
                <Input
                  id="username-1"
                  name="price"
                  defaultValue={product.price}
                />
              </Field>
              <Field>
                <Label htmlFor="username-1">Product Image</Label>
                <Input
                  id="username-1"
                  name="image"
                  defaultValue={product.image}
                />
              </Field>
               </FieldGroup>
              <DialogFooter>
                <DialogClose
                  render={<Button variant="outline">Cancel</Button>}
                />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDialogCard;
