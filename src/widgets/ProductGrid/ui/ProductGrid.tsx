import { ProductCard } from "../../../entities";
import type { ProductType } from "../../../types";

type ProductGridProps = {
  products: ProductType[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product: ProductType) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
