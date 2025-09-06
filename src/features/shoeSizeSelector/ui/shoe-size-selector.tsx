import { useState } from "react";

const ShoeSizeSelector = () => {
  const sizes = [
    "6.0",
    "6.5",
    "7.0",
    "7.5",
    "8.0",
    "8.5",
    "9.0",
    "9.5",
    "10.0",
    "10.5",
    "11.0",
    "11.5",
    "12.0",
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  return (
    <div className="mt-6 mb-6">
      <h3 className="mb-4 font-bold text-black">Select a size</h3>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex h-12 w-24 cursor-pointer items-center justify-center rounded-md text-sm font-semibold ${
              selectedSize === size
                ? "border-black bg-black text-white"
                : "text-brand-dark-grey bg-brand-light-grey hover:border hover:border-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoeSizeSelector;
