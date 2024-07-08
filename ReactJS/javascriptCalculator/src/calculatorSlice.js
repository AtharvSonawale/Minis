import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayValue: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
  operations: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action) {
      const { displayValue, waitingForOperand } = state;
      if (waitingForOperand) {
        state.displayValue = String(action.payload);
        state.waitingForOperand = false;
      } else {
        state.displayValue = displayValue === '0' ? String(action.payload) : displayValue + action.payload;
      }
    },
    inputDot(state) {
      if (!state.displayValue.includes('.')) {
        state.displayValue += '.';
      }
    },
    clearDisplay(state) {
      state.displayValue = '0';
      state.previousValue = null;
      state.operator = null;
      state.waitingForOperand = false;
      state.operations = '';
    },
    performOperation(state, action) {
      const { displayValue, operator, previousValue, operations } = state;
      const inputValue = parseFloat(displayValue);

      if (previousValue == null) {
        state.previousValue = inputValue;
      } else if (operator) {
        const currentValue = previousValue || 0;
        const newValue = calculate[operator](currentValue, inputValue);

        state.displayValue = String(newValue);
        state.previousValue = newValue;
      }

      state.waitingForOperand = true;
      state.operator = action.payload;
      state.operations += `${displayValue} ${action.payload} `;
    },
    evaluate(state) {
      const { displayValue, operator, previousValue, operations } = state;
      const inputValue = parseFloat(displayValue);

      if (operator && previousValue != null) {
        const currentValue = previousValue || 0;
        const newValue = calculate[operator](currentValue, inputValue);

        state.displayValue = String(newValue);
        state.previousValue = null;
        state.operator = null;
        state.waitingForOperand = true;
        state.operations = `${operations}${displayValue} = ${newValue}\n`;
      }
    },
    backspace(state) {
      const { displayValue } = state;
      if (displayValue.length > 1) {
        state.displayValue = displayValue.slice(0, -1);
      } else {
        state.displayValue = '0';
      }
    },
  },
});

const calculate = {
  '/': (prev, next) => prev / next,
  '*': (prev, next) => prev * next,
  '+': (prev, next) => prev + next,
  '-': (prev, next) => prev - next,
};

export const { inputDigit, inputDot, clearDisplay, performOperation, evaluate, backspace } = calculatorSlice.actions;
export default calculatorSlice.reducer;
