import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex h-24 items-center border-2 border-black">
        <div className="flex flex-8 items-center border-2 border-black">
          <div>
            <Link to="/">
              <h1 className="font-display from-brand-black to-brand-grey bg-gradient-to-t bg-clip-text pt-4 pr-12 pb-4 text-3xl font-bold text-transparent">
                SneakerHeads
              </h1>
            </Link>
          </div>
          <div>
            <ul className="text-brand-dark-blue flex gap-16 border-2 border-black">
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/kids">Kids</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-2 gap-4 border-2 border-black">
          <div>Cart</div>
          <div>User icon</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
