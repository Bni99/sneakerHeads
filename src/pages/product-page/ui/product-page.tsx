import { useState } from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ShoeSizeSelector } from "../../../features";
import { formatCurrency } from "../../../shared/utils";
import { Button, useCartStore, useToastStore } from "../../../shared";
import { mockProducts } from "../../../shared/api/__mocks__/product";
import { ProductImageGallery, ProductTag, Rating } from "../../../entities";
import type { ProductType } from "../../../types";

const ProductPage = () => {
  const { id: productId } = useParams<{ id: string }>();
  const product: ProductType | undefined = mockProducts?.find(
    (p) => p.id === Number(productId),
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const addItem = useCartStore((store) => store.addItem);
  const setToastMessage = useToastStore((store) => store.setMessage);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const {
    id,
    title,
    price,
    description,
    rating,
    images,
    image,
    availableSizes,
    tags,
    numberOfReviews,
  } = product;

  const handleAddToCart = () => {
    addItem({
      id: Number(id),
      title: title,
      price: price,
      image: image,
      size: selectedSize,
    });
    setToastMessage("Item added to the cart !");
  };

  return (
    <div className="mx-42 mt-12 flex h-[90vh] gap-10">
      <div className="flex-[3]">
        <ProductImageGallery images={images ?? []} />
      </div>
      <div className="flex-[2] p-10">
        <div className="flex items-center justify-between gap-4 pt-2">
          <ProductTag labels={tags ?? []} />
          <Rating rating={rating ?? 0} numberOfReviews={numberOfReviews ?? 0} />
        </div>

        <h2 className="font-display p-4 pl-0 text-2xl font-bold">{title}</h2>
        <h4 className="p-2 pl-0 text-lg font-semibold">
          {formatCurrency(price)}
        </h4>
        <h4 className="text-brand-dark-grey p-2 pl-0">{description}</h4>

        <ShoeSizeSelector
          availableSizes={availableSizes ?? []}
          onSizeSelection={setSelectedSize}
        />
        <div className="mt-10 flex gap-4">
          <Button
            size="large"
            className="flex flex-1 cursor-pointer gap-2"
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            Add to Cart <FaPlus />
          </Button>
          <Button
            size="large"
            className="flex flex-1 cursor-pointer gap-2"
            variant="invertOutline"
            disabled={!selectedSize}
            onClick={() => {
              setToastMessage("Item moved to the Wishlist :)");
            }}
          >
            <FaRegHeart />
            Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
