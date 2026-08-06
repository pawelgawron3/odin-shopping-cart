import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  test("renders product information", () => {
    const mockProduct = {
      id: 1,
      name: "Classic Black Sunglasses",
      price: 159,
      image: "glasses.jpg",
    };

    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Classic Black Sunglasses")).toBeInTheDocument();

    expect(screen.getByText("159$")).toBeInTheDocument();
  });

  test("has correct product link", () => {
    const mockProduct = {
      id: 5,
      name: "Black Glasses",
      price: 100,
      image: "image.jpg",
    };

    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/products/5");
  });
});
