import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
};

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
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

    case ACTIONS.REMOVE_ITEM: {
      const id = action.payload;

      return {
        ...state,
        items: state.items.filter((cartItem) => cartItem.id !== id),
      };
    }

    case ACTIONS.CLEAR_CART: {
      return {
        ...initialState,
      };
    }

    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;

      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(1, quantity) }
            : cartItem,
        ),
      };
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
      type: ACTIONS.ADD_ITEM,
      payload: item,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: id,
    });
  }

  function clearCart() {
    dispatch({
      type: ACTIONS.CLEAR_CART,
    });
  }

  function updateQuantity(id, quantity) {
    dispatch({
      type: ACTIONS.UPDATE_QUANTITY,
      payload: { id, quantity },
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
