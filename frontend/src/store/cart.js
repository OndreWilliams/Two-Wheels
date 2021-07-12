const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const CLEAR_CART = "cart/CLEAR_CART";

const storage = window.localStorage;

export const addCartItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

let initialState = {};
if (storage.getItem("cart")) {
  initialState = JSON.parse(storage.getItem("cart"));
}

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemID = action.item.id.toString();
      const count = state[itemID] || 0;
      storage.setItem(
        "cart",
        JSON.stringify({ ...state, [itemID]: count + 1 })
      );
      return {
        ...state,
        [itemID]: count + 1,
      };
    }

    case REMOVE_ITEM: {
      const itemID = action.item.id.toString();
      const count = state[itemID];
      if (count === 1) {
        delete state[itemID];
        storage.setItem("cart", JSON.stringify(state));
        return {
          ...state,
        };
      } else {
        storage.setItem(
          "cart",
          JSON.stringify({ ...state, [itemID]: count - 1 })
        );
        return {
          ...state,
          [itemID]: count - 1,
        };
      }
    }

    case CLEAR_CART: {
      storage.removeItem("cart");
      return {};
    }

    default:
      return state;
  }
};

export default CartReducer;
