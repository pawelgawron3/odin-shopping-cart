import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "./CartContext";
import useCart from "../hooks/useCart";

function TestComponent() {
  const { items, addToCart } = useCart();

  const mockProduct = {
    id: 1,
    name: "Classic Black Sunglasses",
    price: 149,
    image: "glasses.jpg",
  };

  return (
    <div>
      <button onClick={() => addToCart(mockProduct, 5)}>Add To Cart</button>{" "}
      <span data-testid="cart-items">{items.length}</span>
      <span data-testid="quantity">{items[0]?.quantity ?? 0}</span>
    </div>
  );
}

describe("CartContext", () => {
  test("adds product to cart", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId("cart-items")).toHaveTextContent("0");

    await user.click(screen.getByRole("button", { name: "Add To Cart" }));

    expect(screen.getByTestId("cart-items")).toHaveTextContent("1");
    expect(screen.getByTestId("quantity")).toHaveTextContent("5");
  });

  test("adds quantity to already existing product", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId("cart-items")).toHaveTextContent("0");

    await user.click(screen.getByRole("button", { name: "Add To Cart" }));
    await user.click(screen.getByRole("button", { name: "Add To Cart" }));

    expect(screen.getByTestId("cart-items")).toHaveTextContent("1");
    expect(screen.getByTestId("quantity")).toHaveTextContent("10");
  });
});
