import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { CDN_URL, MENU_API } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
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
  console.log(resInfo);
  // console.log(resInfo.data.cards[2].card.card.info.name);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo.data.cards[2].card.card.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(1);
  // console.log(
  //   resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .categories[0].itemCards[0].card.info.name
  // );

  return (
    <div className="menu">
      <img src={CDN_URL + cloudinaryImageId}></img>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
