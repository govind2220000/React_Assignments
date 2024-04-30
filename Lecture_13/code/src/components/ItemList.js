import React from "react";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
const ItemList = ({ foodItemCards, addBtn = true, uniqueId = true }) => {
  const dispath = useDispatch();

  const handleItem = (item) => {
    dispath(addItem(item));
    //alert("Item Added Successfully");
  };
  //console.log(foodItemCards);
  return (
    <ul className="">
      {foodItemCards?.map((item) => {
        return (
          <div
            data-testid="foodItems"
            className="flex justify-between border-b-2 m-auto w-full h-full"
            key={
              uniqueId === true
                ? item?.card?.info?.id
                : Date.now() + Math.floor(Math.random() * 1000000)
            }
          >
            <div className="flex flex-col h-full w-full">
              <h4 className="text-left tracking-normal leading-5 text-[#02060cbf] text-[18px] font-bold my-2 font-['Basis_Grotesque_Pro_Bold']">
                {item?.card?.info?.name}
              </h4>
              <h4 className="text-left text-[18px] text-[#02060ceb] font-extrabold leading-5 tracking-tight font-['Basis_Grotesque_Pro']  my-2">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h4>
              <p className="text-sm my-2">{item?.card?.info?.description}</p>
            </div>

            <div className="w-1/4 mx-2 relative">
              {addBtn && (
                <button
                  className="absolute bottom-0 transform -translate-x-1/2 shadow-md bg-black text-white rounded-lg p-2"
                  onClick={() => handleItem(item)}
                >
                  Add+
                </button>
              )}
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className=" w-40 h-full p-2"
              ></img>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default ItemList;
