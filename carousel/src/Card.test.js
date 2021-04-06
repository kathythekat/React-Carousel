import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card caption="Photo by Richard Pasquarella on Unsplash" src="image1" />);
});
// end

it("has the correct alt text & src", function () {
  const { container, debug } = render(<Card caption="Photo by Richard Pasquarella on Unsplash" src="image1" />);
  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt")).toEqual("Photo by Richard Pasquarella on Unsplash");
  expect(img.getAttribute("src")).toContain("image1");
});
// end

it("matches snapshot", function () {
  const { container } = render(<Card caption="Photo by Richard Pasquarella on Unsplash" src="image1" />);
  expect(container).toMatchSnapshot();
});
// end
