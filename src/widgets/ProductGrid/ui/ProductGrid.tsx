import { ProductCard } from "../../../entities";
import { mockProducts } from "../../../shared/api/__mocks__/product";

const ProductGrid = () => {
  return (
    <div className="flex h-[80vh]">
      {mockProducts.map((mockProduct) => {
        return (
          <ProductCard
            id={mockProduct.id}
            image={mockProduct.image}
            name={mockProduct.title}
            price={mockProduct.price}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
