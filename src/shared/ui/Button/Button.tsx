import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-black font-semibold hover:bg-brand-medium-orange",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline:
    "border border-white font-semibold text-white hover:bg-white hover:text-black",
};

const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-display flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 transition duration-300 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
