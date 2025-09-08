import { useState } from "react";
import { SHOE_SIZES } from "../config/sizes";
import { CgDanger } from "react-icons/cg";

type ShoeSizeSelectorProps = {
  availableSizes: string[];
  onSizeSelection: (size: string | null) => void;
};

const ShoeSizeSelector = ({
  availableSizes,
  onSizeSelection,
}: ShoeSizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSizeClick = (isAvailable: boolean, size: string) => {
    if (!isAvailable) {
      setError(`This item is not available in size ${size}`);
      setSelectedSize(null);
      onSizeSelection(null);
    } else {
      setSelectedSize(size);
      setError(null);
      onSizeSelection(size);
    }
  };

  return (
    <div className="mt-6 mb-6">
      <h3 className="mb-4 font-bold text-black">Select a size</h3>
      {error && (
        <span className="flex items-center gap-1 pb-3 text-sm text-red-800">
          <CgDanger />
          {error}
        </span>
      )}
      <div className="grid grid-cols-5 gap-2">
        {SHOE_SIZES.map((size) => {
          const isAvailable = availableSizes?.includes(size);
          return (
            <button
              key={size}
              onClick={() => handleSizeClick(isAvailable, size)}
              className={`flex h-12 w-24 cursor-pointer items-center justify-center rounded-md text-sm font-semibold ${
                !isAvailable
                  ? "border-brand-grey text-brand-grey cursor-not-allowed border"
                  : selectedSize === size
                    ? "border-black bg-black text-white"
                    : "bg-brand-light-grey text-black hover:border hover:border-black"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShoeSizeSelector;
