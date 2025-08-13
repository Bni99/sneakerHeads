import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-2 border-black h-48 flex items-center">
      <div className="border-2 border-black flex-6 ">
        <h2 className="text-2xl font-bold pr-4 pt-2 pb-1">SneakerHeads</h2>
        <h4 className="text-sm">For the love of the sole.</h4>
      </div>
      <div className="border-2 border-black flex flex-4">
        <div className="border-2 border-black flex-1">
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
        <div className="border-2 border-black flex-1">
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
  );
};

export default Footer;
