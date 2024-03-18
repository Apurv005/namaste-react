import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const data = useContext(userContext);

  const checkOnline = useOnlineStatus();

  // Subscribing to the store using a Selector.
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex h-28 bg-[#76ABAE]">
      <div className="flex items-center justify-center w-32">
        <img src={LOGO_URL} className="w-20 h-20"></img>
      </div>
      <div className="flex items-center justify-end  w-[92%] pr-5">
        <ul className="flex mr-8">
          <li className="px-4 ">
            {useOnlineStatus() ? (
              <div className="greenStatus"></div>
            ) : (
              <div className="redStatus"></div>
            )}
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/"
              className="hover:text-[#EEEEEE] ease-in-out	duration-200"
            >
              Home
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/about"
              className="hover:text-[#EEEEEE] ease-in-out	duration-200"
            >
              About
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/contact"
              className="hover:text-[#EEEEEE] ease-in-out	duration-200"
            >
              Conatct
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/cart"
              className="hover:text-[#EEEEEE] ease-in-out	duration-200"
            >
              Cart - {cartItems.length} items
            </Link>
          </li>
        </ul>
        <button
          className="text-xl border border-black border-solid px-3 py-2 hover:bg-[#EEEEEE] ease-in-out	duration-500"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <li className="px-4 text-xl list-none">
          <p className="hover:text-[#EEEEEE] ease-in-out	duration-200">
            {data.name}
          </p>
        </li>
      </div>
    </div>
  );
};

// This is default export
export default Header;
