import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log("in restrocaRd");
  console.log(props);
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
    <div className="p-3 m-3 hover:bg-gray-300 items-center justify-center w-56 h-50">
      <img
        className=" items-center"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="">
        <h3 className="font-semibold">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const PromotedCard = (RestaurantCard) => {
  return (props) => {
    {
      console.log("props");
      console.log(props);
    }
    return (
      <div>
        <label>Popular</label>
        <RestaurantCard {...props}></RestaurantCard>{" "}
        {/*resData={props.resData} */}
      </div>
    );
  };
};

export default RestaurantCard;
