import { logoUrl } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={logoUrl}></img>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
