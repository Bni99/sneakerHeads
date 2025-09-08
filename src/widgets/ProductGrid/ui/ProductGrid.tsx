import { ProductCard } from "../../../entities";
import type { Product } from "../../../types";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product: Product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
