// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    // Add other slices here if needed
  },
});

export default store;
