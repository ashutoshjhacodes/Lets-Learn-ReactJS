import { logoUrl } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus=useOnlineStatus();
  //subscribing to the store
  const cartItems =useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg m-2">
      <div className="logo-container">
        <img className="logo-img w-28" src={logoUrl}></img>
      </div>
      <div className="nav-container flex items-center">
        <ul className="nav-links flex p-4 m-4">
          <li className="px-4">
            Online: {onLineStatus?"✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold text-xl">Cart({cartItems.length} items)</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
