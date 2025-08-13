import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="border-black border-2 h-24 flex items-center">
        <div className="border-2 border-black flex items-center flex-8">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold pb-4 pt-4 pr-12">
                SneakerHeads
              </h1>
            </Link>
          </div>
          <div>
            <ul className="border-2 border-black flex gap-16">
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

        <div className="border-2 border-black flex gap-4 flex-2">
          <div>Cart</div>
          <div>User icon</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
