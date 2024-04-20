import React from "react";
import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ foodItemCards }) => {
  console.log(foodItemCards);
  return (
    <ul>
      {foodItemCards.map((item) => {
        return (
          <div
            className="flex justify-between  border-b-4 my-2 w-full"
            key={item.card.info.id}
          >
            <div className="flex flex-col">
              <h4 className="text-left font-extrabold my-2">
                {item.card.info.name}
              </h4>
              <h4 className="text-left  font-semibold  my-2">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
              <p>{item.card.info.description}</p>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-[200] h-30 mx-2"
            ></img>
          </div>
        );
      })}
    </ul>
  );
};

export default ItemList;
