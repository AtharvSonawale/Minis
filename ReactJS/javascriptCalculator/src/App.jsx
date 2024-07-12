// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calculator from './components/Calculator';
import './styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
};

export default App;
