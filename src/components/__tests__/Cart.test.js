import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Components", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Korean Spicy Range (12)");

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(12);
});

it("Should ADD 1 Restaurant Menu Components to Cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Korean Spicy Range (12)");
  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const cartLink = screen.getByTestId("cart-link");
  expect(cartLink).toBeInTheDocument();
  expect(cartLink).toHaveTextContent(/\(1 Items\)/);
});

it("Should ADD 2 Restaurant Menu Components to Cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Korean Spicy Range (12)");
  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const cartLink = screen.getByTestId("cart-link");
  expect(cartLink).toBeInTheDocument();
  expect(cartLink).toHaveTextContent(/\(2 Items\)/);
});

