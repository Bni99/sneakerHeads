type ProductTagProps = {
  labels: string[];
};

const ProductTag = ({ labels }: ProductTagProps) => {
  const variantClasses: Record<string, string> = {
    "Best Seller": "text-black border",
    "Limited Edition": "bg-red-800 text-white",
    "New Arrival": "bg-black text-white",
  };

  return (
    <div className="flex gap-2">
      {labels?.map((label, index) => (
        <span
          key={index}
          className={`border px-2 py-[1px] text-sm font-bold ${variantClasses[label]}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export default ProductTag;
