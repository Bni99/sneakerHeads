import { useParams } from "react-router-dom";
import { mockProducts } from "../../../shared/api/__mocks__/product";
import { FaPlus, FaStar } from "react-icons/fa6";
import { Button } from "../../../shared";
import { ProductImageGallery } from "../../../entities";
import { ShoeSizeSelector } from "../../../features";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  console.log(selectedSize);

  return (
    <div className="mt-12 mr-42 ml-42 flex h-[90vh] border-2 border-black">
      <div className="flex-3 border-2 border-black">
        <ProductImageGallery images={product?.images as string[]} />
      </div>
      <div className="flex-2 border-2 border-black p-10">
        <span className="align-center flex w-fit border-2 border-black pr-2 pl-2">
          <FaStar />
          {product?.rating}
        </span>
        <h2 className="font-display p-4 pl-0 text-2xl font-bold">
          {product?.title}
        </h2>
        <h4 className="p-2 pl-0 text-lg font-semibold">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
          }).format(product?.price as number)}
        </h4>
        <h4 className="text-brand-dark-grey p-2 pl-0">
          {product?.description}
        </h4>
        <ShoeSizeSelector
          availableSizes={product?.availableSizes as string[]}
          onSizeSelection={setSelectedSize}
        />
        <Button size="large" className="mt-10 w-full" disabled={!selectedSize}>
          Add to Cart <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
