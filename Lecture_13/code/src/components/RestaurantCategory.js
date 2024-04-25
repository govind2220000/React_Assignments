import { useState } from "react";
import ItemList from "./ItemList.js";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //const [showitems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();

    console.log("Clicked");
  };
  return (
    <div className="p-4 mx-auto shadow-lg bg-gray-150 rounded-lg focus:outline-none focus:ring-2 w-6/12  bg-gray-100  transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400">
      {/* {console.log(data)} */}
      {/* Accordion
  title
  content */}
      {/* Header */}
      <div
        className="flex justify-between w-full h-full p-2 cursor-pointer bg-gray-150 rounded-lg "
        onClick={handleClick}
      >
        <span className="font-semibold font-['Basis_Grotesque_Pro'] tracking-wide text-xl ">
          {data?.card?.card?.title}({data?.card?.card?.itemCards?.length})
        </span>
        <span className="flex items-center justify-center text-2xl font-extrabold">
          {showItems ? <GoChevronUp /> : <GoChevronDown />}
        </span>
      </div>
      {showItems && (
        <ItemList foodItemCards={data.card.card.itemCards}></ItemList>
      )}
    </div>
  );
};

export default RestaurantCategory;
