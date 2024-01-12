// store/customerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const { customerId, updatedData } = action.payload;
      const customerIndex = state.customers.findIndex((customer) => customer.id === customerId);
      if (customerIndex !== -1) {
        state.customers[customerIndex] = { ...state.customers[customerIndex], ...updatedData };
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
