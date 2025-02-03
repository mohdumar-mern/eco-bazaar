import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0, // Keep track of the total price of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartShow: (state) => {
      state.show = !state.show;
    },
    hideCart: (state) => {
      state.show = false; // Hide cart
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        // Add the new item to the cart
        state.cartItems.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price, // Set initial total price for the item
          name: newItem.name,
        });
      } else {
        // Update existing item in the cart
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      // Recalculate the total price of all items in the cart
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    increaseItemInCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // Increase quantity and totalPrice
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }

      // Recalculate total price and quantity
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    decreaseItemToCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If quantity is 1, remove the item from the cart
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          // Decrease quantity and totalPrice
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
        state.totalQuantity--;
      }

      // Recalculate the total price after removal
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      // Simply remove the item from the cart without checking quantity
      state.cartItems = state.cartItems.filter((item) => item.id !== id);

      // Recalculate total quantity and total price
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
});

export const {
  toggleCartShow,
  addItemToCart,
  hideCart,
  decreaseItemToCart,
  increaseItemInCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const totalCartItems = (state) => state.cart.cartItems;
export const totalQuantities = (state) => state.cart.totalQuantity;
export const showCart = (state) => state.cart.show;
export const totalPrice = (state) => state.cart.totalPrice;
