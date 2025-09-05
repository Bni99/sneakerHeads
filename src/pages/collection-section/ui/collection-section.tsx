import { ProductGrid } from "../../../widgets/ProductGrid";
import { mockProducts } from "../../../shared/api/__mocks__/product";

const CollectionSection = () => {
  return (
    <div className="mt-12 mr-42 ml-42 h-[90vh] border-2 border-black">
      <ProductGrid products={mockProducts} />
    </div>
  );
};

export default CollectionSection;
