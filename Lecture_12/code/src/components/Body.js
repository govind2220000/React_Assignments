import { useEffect, useState } from "react";
import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = PromotedCard(RestaurantCard);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    console.log("fetch from body");
    fetchData();
  }, []);

  const status = useOnlineStatus();
  if (!status) {
    return <h1>Looks like you are offline</h1>;
  }

  // * After initial redering is completed the useEffect will run and then it will rerender again with new data that is the reason if we see in
  // * console we will see below line "Body rendered will be seen"

  console.log("Body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0749777&lng=72.88477790000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // * this gives an restaurants array
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="flex justify-center p-4 m-4">
        <div className="flex px-2 items-center w-1/2">
          <form className="flex p-2 shadow-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 w-full justify-between transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400">
            <input
              type="text"
              placeholder="Search a restaurant"
              className="bg-gray-100  outline-none w-full "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className=""
              onClick={(e) => {
                // * Filter th restaurant cards and update the UI
                // * searchText
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);
                e.preventDefault();
              }}
            >
              <svg
                className="w-4 h-4 items-center"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>
        </div>
        <button
          className="shadow-lg  bg-gray-100  rounded-lg p-2 mx-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );

            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {console.log("103", filteredRestaurant)}

        {filteredRestaurant.map((restaurant) => (
          <Link
            className="shadow-lg m-2 rounded-md transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-800"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* {console.log(restaurant)} */}
            {restaurant.info.avgRating > 4 ? (
              <RestaurantCardPromoted
                resData={restaurant}
              ></RestaurantCardPromoted>
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
