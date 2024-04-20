import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  //   let btnName = 'Login';
  // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  const css =
    "p-2 w-auto h-10 mx-2 bg-gray-100 shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400";

  return (
    <div className="flex justify-between bg-gray-100">
      <div className="w-40 items-center">
        <Link to={"/"}>
          <img src={LOGO_URL} alt="App Logo" className="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className={css}>{`Status:${useOnlineStatus() ? "🟢" : "❌"}`}</li>
          <li className={css}>
            <Link to="/">Home</Link>
          </li>
          <li className={css}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={css}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className={css}>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className={css}>Cart</li>
          <button
            className={css}
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
