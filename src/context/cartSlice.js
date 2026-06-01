import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      const foundMatchedItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (foundMatchedItemIndex === -1) {
        console.log(action);
        state.push({
          id: action.payload.id,
          productThumbnail: action.payload.productThumbnail,
          productName: action.payload.productName,
          discountedPrice: action.payload.discountedPrice,
          productAmount: action.payload.productAmount,
        });
        return;
      }

      state[foundMatchedItemIndex].productAmount +=
        action.payload.productAmount;
    },
    removeProduct: (state, action) => {
      const foundMatchedItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(foundMatchedItemIndex);
      console.log(state);
      console.log(action.payload);
      if (foundMatchedItemIndex === -1) {
        return;
      }
      state.splice(foundMatchedItemIndex, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice;
