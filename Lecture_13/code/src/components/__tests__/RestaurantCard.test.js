import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { PromotedCard } from "../RestaurantCard";
import MOCK_DATA from "./mockdata/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument("Chinese Wok");
});

it("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardPromoted = PromotedCard(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const label = screen.getByText("Popular");
  expect(label).toBeInTheDocument("Popular");
});

//HOF Promoted card Compoenent works somewhat like below

// function abc(a){
//     console.log(`abc:${a}`)
// }

// function abc1(b){

//     return (b) =>{
//         return abc(b)
//     }

// }

// const a = abc1(1)
// a(2)
