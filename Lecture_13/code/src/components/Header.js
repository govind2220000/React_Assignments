import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  //   let btnName = 'Login';
  // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("header render");
  const css =
    "p-2 w-auto h-10 mx-2 bg-gray-100 shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400";
  const { loggedInUser, setUserName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); //the cart here is referring to appStore reducer cart and not the cart in the cartSlice also useSelector is used for fetching/reading the values
  //console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-50">
      <div className="w-40 items-center">
        <Link to={"/"}>
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="mix-blend-multiply hover:scale-110 transition-transform duration-200 mx-auto"
          />
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
          <li className={css}>
            <Link
              to="/cart"
              className="flex justify-center items-center hover:text-green-500 duration-[.3s]"
            >
              <img
                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                className="w-4 h-4 h"
                alt="Cart"
              ></img>
              {`(${cartItems.length})`}
            </Link>
          </li>
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
          <li className={css}>{loggedInUser}</li> {/*Context variable */}
          {/* The below butto is used to update the context varibale which we have binded in our App.js */}
          {/* <button
            className={css}
            onClick={() => {
              //   btnName = 'Logout';
              setUserName("New Govind");
            }}
          >
            NewButton
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
