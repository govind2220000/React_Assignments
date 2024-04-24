import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  //Make sure u are selecting right part of the store in this case we have to access only cart reducer which have items its very important as it will have performance impact.
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log("Inside");
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="">
      <div>
        <span>Cart</span>
        <span>
          <button onClick={handleClearCart}>ClearCart</button>
        </span>
      </div>
      <div>
        <ItemList foodItemCards={cartItems} add={false}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
