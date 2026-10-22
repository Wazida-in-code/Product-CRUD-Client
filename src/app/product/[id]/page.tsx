import Image from "next/image";


const ProductDetailsPage = async ({ params }: {params:{ id: string }}) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/products/${id}`);
  const data = await res.json();
 
  return (
    <div>
      <div className="max-w-sm mx-auto mt-10 rounded-xl border p-5 shadow-md">
        <Image width={200} height={50}
          src={data.result.image}
          alt={data.result.name}
          className=" object-cover rounded-lg"
        />

        <h1 className="text-2xl font-bold mt-4">{data.result.name}</h1>

        <p className="text-lg mt-2">Price: ৳{data.result.price}</p>

        <p className="text-sm text-gray-500 mt-2">
          Product ID: {data.result._id}
        </p>

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
