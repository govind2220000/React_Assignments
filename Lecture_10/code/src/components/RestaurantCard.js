import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="p-3 m-3 hover:bg-gray-300 items-center justify-center">
      <img
        className="w-56 h-25 items-center"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="">
        <h3 className="font-semibold">{name}</h3>
        <hr />
        <em>{cuisines.join(", ").substring(0, 30) + "..."}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
