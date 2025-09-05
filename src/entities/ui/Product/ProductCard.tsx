type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <div className="w-80 border-2 border-black" key={id}>
      <img src={image} />
      <h4 className="p-2 pl-0 text-lg">{name}</h4>
      <span className="font-bold">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </span>
    </div>
  );
};

export default ProductCard;
