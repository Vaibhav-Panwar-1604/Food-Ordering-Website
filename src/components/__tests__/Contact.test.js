import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases " , () => {

  test(" Should show Contact Text", ()=> {

  render(<Contact />);

  const result = screen.getByText("Name: Vaibhav Panwar");

  expect(result).toBeInTheDocument();
})

it('should show Contact Heading ', () => {
  
  render(<Contact />);

  const headings = screen.getAllByRole("heading");

  expect(headings[0]).toBeInTheDocument();
})

test('Contact Heading test ', () => {
  
  render(<Contact />);

  const headings = screen.getAllByRole("heading");

  expect(headings.length).toBe(5);
  
})

})

