import { Link } from "react-router-dom";
import { Separator } from "../../../shared";

const Header = () => {
  return (
    <>
      <div className="mr-42 ml-42 flex h-20 items-center">
        <div className="flex flex-8 items-center">
          <div>
            <Link to="/">
              <h1 className="font-display from-brand-black to-brand-grey bg-gradient-to-t bg-clip-text pt-4 pr-12 pb-4 text-3xl font-bold text-transparent">
                SneakerHeads
              </h1>
            </Link>
          </div>
          <div>
            <ul className="text-brand-dark-blue mt-2 ml-4 flex gap-12">
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

        <div className="flex flex-2 gap-4">
          <div>Cart</div>
          <div>User icon</div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Header;
