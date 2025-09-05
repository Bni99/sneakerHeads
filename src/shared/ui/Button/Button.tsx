import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "invertOutline";
type Size = "large" | "medium" | "small";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-orange text-black hover:bg-brand-medium-orange",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline: "border border-white text-white hover:bg-white hover:text-black",
  invertOutline:
    "border border-black text-black hover:bg-black hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  small: "px-3 py-1 text-sm font-semibold",
  medium: "px-4 py-2 text-base font-semibold",
  large: "px-6 py-3 text-lg font-semibold",
};

const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-display flex cursor-pointer items-center justify-center gap-1 rounded-lg transition duration-300 ${variantClasses[variant]} ${className} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
