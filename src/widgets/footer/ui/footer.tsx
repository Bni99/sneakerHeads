import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="flex h-48 items-center">
        <div className="flex-6">
          <h2 className="pt-2 pr-4 pb-1 text-2xl font-bold">SneakerHeads</h2>
          <h4 className="text-sm">For the love of the sole.</h4>
        </div>
        <div className="flex flex-4">
          <div className="flex-1">
            <h4 className="font-bold">About</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="font-bold">Community</h4>
            <ul>
              <li>
                <Link to="/instagram">Instagram</Link>
              </li>
              <li>
                <Link to="/facebook">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
