import { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../../../features";
import { MdOutlineSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Button, Separator, useCartStore } from "../../../shared";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <>
      <div className="mx-42 flex h-20 items-center">
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
                <Link
                  to="/collections"
                  className="after:bg-brand-dark-blue relative cursor-pointer after:absolute after:-bottom-7 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-700 hover:after:w-full"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="after:bg-brand-dark-blue relative cursor-pointer after:absolute after:-bottom-7 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-700 hover:after:w-full"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="after:bg-brand-dark-blue relative cursor-pointer after:absolute after:-bottom-7 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-700 hover:after:w-full"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="after:bg-brand-dark-blue relative cursor-pointer after:absolute after:-bottom-7 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-700 hover:after:w-full"
                >
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-8 mt-2 flex flex-2 items-center justify-end gap-6">
          <div>
            <MdOutlineSearch
              size={24}
              className="cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </div>
          <span>
            <FaRegHeart size={22} />
          </span>
          <div className="relative">
            <Link to="/cart">
              {totalItems > 0 && (
                <span className="bg-brand-orange absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}

              <FaCartShopping
                size={22}
                className="cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>

          <div>
            <Button
              size="small"
              variant="invertOutline"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <SignUpForm open={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
    </>
  );
};

export default Header;
