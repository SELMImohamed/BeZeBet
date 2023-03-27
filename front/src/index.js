import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'


import Root from "./routes/Routes";
import Register from "./pages/register/register"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();