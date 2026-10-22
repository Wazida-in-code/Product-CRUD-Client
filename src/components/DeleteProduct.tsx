'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DeleteProduct = ({id}:{id:string}) => {
    const router = useRouter()
    const handleDeleteProduct = async () => {
        const res = await fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();
        console.log(data);
        router.refresh()
    }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          render={<Button variant="destructive">Delete</Button>}
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              If you delete the product, it will not shown to you!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteProduct;
