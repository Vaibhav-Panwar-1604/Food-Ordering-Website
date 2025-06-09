import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock"
import "@testing-library/jest-dom"

it("Should Load Restaurant Card with Props", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
})