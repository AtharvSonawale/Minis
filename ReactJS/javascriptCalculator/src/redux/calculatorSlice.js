import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayValue: '0',
  previousValue: null,
  operator: null,
  waitingForNewValue: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit: (state, action) => {
      const { digit } = action.payload;
      if (state.waitingForNewValue) {
        state.displayValue = digit;
        state.waitingForNewValue = false;
      } else {
        state.displayValue = state.displayValue === '0' ? digit : state.displayValue + digit;
      }
    },
    inputDecimal: (state) => {
      if (!state.displayValue.includes('.')) {
        state.displayValue += '.';
      }
    },
    clear: () => {
      return initialState;
    },
    performOperation: (state, action) => {
      const { operator } = action.payload;
      const inputValue = parseFloat(state.displayValue);

      if (state.previousValue == null) {
        state.previousValue = inputValue;
      } else if (state.operator) {
        const currentValue = state.previousValue || 0;
        const newValue = calculate(currentValue, inputValue, state.operator);

        state.displayValue = `${newValue}`;
        state.previousValue = newValue;
      }

      state.waitingForNewValue = true;
      state.operator = operator;
    },
    compute: (state) => {
      const inputValue = parseFloat(state.displayValue);

      if (state.operator && state.previousValue != null) {
        state.displayValue = `${calculate(state.previousValue, inputValue, state.operator)}`;
        state.previousValue = null;
        state.operator = null;
        state.waitingForNewValue = true;
      }
    }
  },
});

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
};

export const { inputDigit, inputDecimal, clear, performOperation, compute } = calculatorSlice.actions;
export default calculatorSlice.reducer;
