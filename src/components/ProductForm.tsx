'use client'
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Field, FieldGroup } from "./ui/field";
import { Button } from "./ui/button";

const ProductForm = () => {
  const handleAddProduct = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:8000/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    
  };
  return (
    <div className="mt-30">
      <form onSubmit={handleAddProduct}>
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Product Name</Label>
            <Input id="name-1" name="name" defaultValue="" />
          </Field>
          <Field>
            <Label htmlFor="username-1">Price</Label>
            <Input id="username-1" name="price" defaultValue="" />
          </Field>
          <Field>
            <Label htmlFor="username-1">Product Image</Label>
            <Input id="username-1" name="image" defaultValue="" />
          </Field>

          <Button type="submit" className="bg-blue-300">
            Add Product
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ProductForm;
