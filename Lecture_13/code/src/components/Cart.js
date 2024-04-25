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
    <div className="m-20">
      <div className="flex justify-between w-full m-auto p-2 shadow-lg bg-gray-150 rounded-lg focus:outline-none focus:ring-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400">
        <span className=" text-[#02060cbf] text-[18px] font-bold tracking-normal leading-10 my-2 font-['Basis_Grotesque_Pro_Bold'] ">
          Cart
        </span>
        <span>
          <button
            onClick={handleClearCart}
            className="text-[#02060cbf] text-[18px] font-bold tracking-normal leading-10 my-2 font-['Basis_Grotesque_Pro_Bold']"
          >
            ClearCart
          </button>
        </span>
      </div>
      <div className="py-2">
        <ItemList
          foodItemCards={cartItems}
          addBtn={false}
          uniqueId={Date.now() + Math.floor(Math.random() * 1000000)}
        ></ItemList>
      </div>
    </div>
  );
};

export default Cart;
