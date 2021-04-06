import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders without crashing", function () {
  render(<Carousel />);
});

it("matches snapshot", function () {
  const { container, debug } = render(<Carousel />);
  expect(container).toMatchSnapshot();
});

// end

it("works when you click on the right arrow", function () {
  const { container } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    container.querySelector(
      'img[alt="Photo by Richard Pasquarella on Unsplash"]'
    )
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector(
      'img[alt="Photo by Richard Pasquarella on Unsplash"]'
    )
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(<Carousel />);
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector(
      'img[alt="Photo by Richard Pasquarella on Unsplash"]'
    )
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector(
      'img[alt="Photo by Richard Pasquarella on Unsplash"]'
    )
  ).toBeInTheDocument();
});

it("hides left arrow when on the first image", function() {
  const {container} = render(<Carousel />)
  expect(
    container.querySelector(
      'img[alt="Photo by Richard Pasquarella on Unsplash"]'
    )
  ).toBeInTheDocument();
  expect(container.querySelector(".fa-chevron-circle-left")).not.toBeInTheDocument();
})

it("hides right arrow when on the last image", function() {
  const {container} = render(<Carousel />);
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(
    container.querySelector(
      'img[alt="Photo by Josh Post on Unsplash"]'
    )
  ).toBeInTheDocument();

  expect(container.querySelector(".fa-chevron-circle-right")).not.toBeInTheDocument();
})
