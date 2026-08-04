import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, item],
      };
    }

    case "REMOVE_ITEM": {
      const id = action.payload;

      const existingItem = state.items.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.filter((cartItem) => cartItem.id !== id),
        };
      }
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product, quantity) {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function removeFromCart(product) {
    const id = product.id;

    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
