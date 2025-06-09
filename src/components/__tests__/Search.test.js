import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body.js";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListdata.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search ResList for Burger Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("SearchInputBox");
  

  fireEvent.change(searchInput, { target: { value: "burger" } });
  
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3);
});
