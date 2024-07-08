import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
