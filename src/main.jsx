import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Random, { loader as randomLoader } from "./Random.jsx";
import Top, { loader as topLoader } from "./Top.jsx";
import Joke, { loader as jokeLoader } from "./Joke.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "random",
    element: <Random />,
    loader: randomLoader,
    // action: contactAction,
  },
  {
    path: "jokes/top-10",
    element: <Top />,
    loader: topLoader,
    // action: editAction,
  },
  {
    path: "jokes/:jokeId",
    element: <Joke />,
    loader: jokeLoader,
    // action: editAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
