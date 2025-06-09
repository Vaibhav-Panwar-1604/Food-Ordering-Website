import { render , screen} from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


it("Should load header component with About Button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const aboutButton = screen.getByText(/about/i);
  expect(aboutButton).toBeInTheDocument();
});

it("Should load header component with Contact Button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const aboutButton = screen.getByText("Contact");
  expect(aboutButton).toBeInTheDocument();
});
