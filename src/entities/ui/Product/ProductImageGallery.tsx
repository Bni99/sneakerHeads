type ProductImageGalleryProps = {
  images: string[];
};

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.slice(0, 4).map((img, idx) => (
        <div key={idx} className="aspect-square overflow-hidden">
          <img
            src={img}
            alt={`Product view ${idx + 1}`}
            className="h-full w-full cursor-pointer object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImageGallery;
