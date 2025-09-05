type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <div className="h-52 w-52 border-2 border-black" key={id}>
      <img src={image} />
      <h4>{name}</h4>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
