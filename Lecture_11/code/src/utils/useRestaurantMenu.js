import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants.js";
const useRestaurantMenu = (resId) => {
  //console.log("Hello i m custom hook before useEffect");
  const [resInfo, setResInfo] = useState(null);
  //Fetch the data
  useEffect(() => {
    fetchData();
    //console.log("Hello i m custom hook from inside the useEffect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  //console.log("Hello i m custom hook after useEffect");
  return resInfo;
};

export default useRestaurantMenu;
