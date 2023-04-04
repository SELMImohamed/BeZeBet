import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import Home from "./routes/Home";
import Register from "./pages/register/register";
import Login from './pages/login/login';
import Game from "./pages/gamble/game";
import CreateBet from "./pages/bet/CreateBet";
import { HomePage } from "./pages/home/home";


const router = createBrowserRouter(
  [{
    path:"/",
    element: <Home />,

  },
  {
    path:"/register",
    element: <Register />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/game",
    element: <Game />,
  },
  {
    path:"/bet",
    element: <CreateBet />,
  },
  {
    path:"/home",
    element: <HomePage />,
  }
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
