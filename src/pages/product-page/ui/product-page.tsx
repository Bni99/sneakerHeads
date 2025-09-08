import { useParams } from "react-router-dom";
import { mockProducts } from "../../../shared/api/__mocks__/product";
import { useState } from "react";
import { ProductImageGallery, ProductTag, Rating } from "../../../entities";
import { ShoeSizeSelector } from "../../../features";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../../shared";

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="mx-42 mt-12 flex h-[90vh] gap-10">
      <div className="flex-[3]">
        <ProductImageGallery images={product.images ?? []} />
      </div>
      <div className="flex-[2] p-10">
        <div className="flex items-center justify-between gap-4 pt-2">
          <ProductTag labels={product.tags ?? []} />
          <Rating
            rating={product.rating ?? 0}
            numberOfReviews={product.numberOfReviews ?? 0}
          />
        </div>

        <h2 className="font-display p-4 pl-0 text-2xl font-bold">
          {product.title}
        </h2>
        <h4 className="p-2 pl-0 text-lg font-semibold">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </h4>
        <h4 className="text-brand-dark-grey p-2 pl-0">{product.description}</h4>

        <ShoeSizeSelector
          availableSizes={product.availableSizes ?? []}
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
