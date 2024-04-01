import React from "react";
import ReactDOM from "react-dom/client";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//Here we have to follow the order of execution as below as the compponents we are creating are nothing but a function expression inside a variable which is returning a JSX so as we know function expressions cant be hoisted at top unlike a declared function hence so its variables are just declared and not initialized at top hence this order needs to be followed so that varibales which are having function expressions can be initialized before using them(in other words before rendering them) or else they will throw error(of undefined or reference error as they were declared at top but never initialized before using them.)

//So in below case we have just initialized our main component which are having multiple nested components so here we have followed order such that every variables with function expression are being initialized and at the end we are rendering our main component as every varibales with function expression is already initialized so no error will be thrown but if we change the order liek if we try to render our component before initializtion then will throw error .

//So if we change the order such thatw we try to render main component without initialization of function expression it will throw error as our AppLayout variable is declared but not initialized and still we are trying to render it hence it will throw error however we can bypass this using a trick we can create a fucntion declaration directly and use that function then it will work as fucntion declaration are hoisted at top so they will execute irrespective to order of execution

//Error case scenario
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       {/* <Body />
//         <Footer /> */}
//     </div>
//   );
// };

//Below is Trick method not reccommended

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(AppLayout());

// function AppLayout() {
//   return (
//     <div className="app">
//       {/* <Header /> */}
//       {/* <Body />
//         <Footer /> */}
//       <h1>Hello Hoisting</h1>
//     </div>
//   );
// }

//Success Scenario way of proper execution

const AppLayout = () => {
  //declaration and initializtion will be done here but it will not being executed here it will only excute when we try to render it in root.render(<AppLayout />); hence it will not throw any error becoz root.render is at end and till then we will have initialized all our nested components funsction expression as well so it will execute smoothly.
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="Biryani"
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (abc) => {
  console.log(abc);
  const { name, cuisines, avgRating, sla } = abc?.resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        // src={
        //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
        //   resData.data.cloudinaryImageId
        // }

        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
        }
        alt="Biryani"
      />
      <h3>Name:{`${name}`}</h3>
      <h4>Cuisines:{cuisines.join(", ")}</h4>
      <h4>Rating:{avgRating}</h4>
      <h4>deliveryTime:{sla.deliveryTime}</h4>
    </div>
  );
};

const resData = {
  info: {
    id: "105237",
    name: "UBQ by Barbeque Nation",
    cloudinaryImageId: "mlyxg1rnaklpgresq2k3",
    locality: "Phoenix Market city",
    areaName: "Kurla",
    costForTwo: "₹300 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 4,
    parentId: "10804",
    avgRatingString: "4.0",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-04-01 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹200",
      discountTag: "GET",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-phoenix-market-city-kurla-mumbai-105237",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={resData} />
        {/* <RestaurantCard resName="KFC Foods" cuisine="Burger,Fast Food" /> */}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
