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
import Game from "./pages/gamble/game";

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
    path:"/game",
    element: <Game />,
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
