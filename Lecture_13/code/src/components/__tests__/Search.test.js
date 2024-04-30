// * Integration Testing - Testing Search Feature => which includes many components

import { act } from "react-dom/test-utils";
import Body from "../../components/Body.js";
import MOCK_DATA from "./mockdata/mockResListData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text iput", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  //Searching test functionality starts here

  const searchBtn = screen.getByTestId("search");
  const searchInput = screen.getByTestId("input");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("should filter Top-Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByTestId("toprated");
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  //console.log(cardsAfterFilter.length);
  expect(cardsAfterFilter.length).toBe(11);
});
