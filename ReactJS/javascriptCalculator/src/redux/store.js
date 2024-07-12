// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
