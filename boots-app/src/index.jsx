import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import rootReducer from "./reducers/RootReducer";
import thunk from  'redux-thunk';
import store from "./reducers/RootReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore({
//   reducer : rootReducer,
//   middleware : [thunk],
// })

root.render(
  <Provider store={store}>
   <Router>
    <App />
  </Router>
  </Provider>
);
