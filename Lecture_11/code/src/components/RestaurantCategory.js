import ItemList from "./ItemList.js";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="p-4 mx-auto shadow-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 w-6/12 transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400">
      {/* {console.log(data)} */}
      {/* Accordion
  title
  content */}
      {/* Header */}
      <div className="flex justify-between ">
        <span>
          {data.card.card.title}({data.card.card.itemCards.length})
        </span>
        <span>⏬</span>
      </div>
      <ItemList foodItemCards={data.card.card.itemCards}></ItemList>
    </div>
  );
};

export default RestaurantCategory;
