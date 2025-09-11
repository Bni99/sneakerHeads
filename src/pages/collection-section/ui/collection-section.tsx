import { ProductGrid } from "../../../widgets/ProductGrid";
import { mockProducts } from "../../../shared/api/__mocks__/product";

const CollectionSection = () => {
  return (
    <div className="mx-42 my-12">
      <ProductGrid products={mockProducts} />
    </div>
  );
};

export default CollectionSection;
