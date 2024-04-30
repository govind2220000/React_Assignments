import RestaurantMenu from "../RestaurantMenu.js";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import MOCK_DATA from "./mockdata/mockResMenu.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu></RestaurantMenu>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Pot Rice(3)");
  console.log(accordionHeader);
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
});
