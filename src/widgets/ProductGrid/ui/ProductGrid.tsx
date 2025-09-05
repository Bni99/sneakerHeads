import { ProductCard } from "../../../entities";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product: Product) => {
        return (
          <ProductCard
            id={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
