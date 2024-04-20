import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { CDN_URL, MENU_API } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json);
  // };

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }
  //console.log(resInfo);
  // console.log(resInfo.data.cards[2].card.card.info.name);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo.data.cards[2].card.card.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  //console.log(1);
  // console.log(
  //   resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .categories[0].itemCards[0].card.info.name
  // );

  const categories =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
      c?.card?.card["@type"].includes("ItemCategory")
    );
  console.log(categories);

  return (
    <div className="flex flex-col items-center w-full text-center">
      <div>
        <h1 className="font-extrabold text-3xl leading-7 tracking-tight">
          {name}
        </h1>
      </div>
      <p className="font-bold text-lg my-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="w-[20vw] shadow-lg p-2 rounded-md text-black">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="w-full h-50 mx-auto"
        ></img>
      </div>

      <h2>Menu</h2>
      <ul className="w-full">
        {categories.map((category) => (
          <div key={category.card.card.title} className="w-full m-4">
            <RestaurantCategory data={category}></RestaurantCategory>
            {/* {item.card.info.price / 100 || item.card.info.defaultPrice / 100} */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
