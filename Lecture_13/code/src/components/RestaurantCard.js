import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log("in restrocaRd");
  // console.log(props);
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
    <div className="flex flex-col p-3 m-3  w-56 h-auto">
      {console.log(deliveryTime)}
      <img
        className="w-full h-50"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="flex-grow">
        <h3 className="font-semibold">{name}</h3>
        <hr />
        <em className="">{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo}</h4>
        {/* <h4>{deliveryTime} minutes</h4> */}
      </div>
    </div>
  );
};

export const PromotedCard = (RestaurantCard) => {
  return (props) => {
    //so here we are passing as resData = {restaurant} in props so it is bsically {resData:restaurantDetails} so when we pass {...props} to RestaurantCard Component it basically passes resData = {restaurant} only as it destructutes all the props so here we are having only one props hence it will pass resData = {restaurant} only refer JS docs(Props passing in react)
    // {
    //   console.log("props");
    //   console.log(props);
    // }
    return (
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg">
          Popular
        </label>
        <RestaurantCard {...props}></RestaurantCard>{" "}
        {/*resData={props.resData} */}
      </div>
    );
  };
};

export default RestaurantCard;
