import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <div className="flex justify-between bg-white shadow-lg relative z-50 ">
      <div className="logo-container">
        <Link to="./">
          <img alt="logo" className="w-22" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 ">
            <Link data-testid="cart-link" to="./cart" className="mr-2 flex justify-center items-center"><FaCartShopping /> - ({cartItems.length} Items)</Link>
          </li>
          
          <li className="ml-2">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
