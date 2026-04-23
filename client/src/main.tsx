import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Chat from "./pages/Chat/Chat";
import Explorer from "./pages/Explorer/Explorer";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";
import Sessions from "./pages/Sessions/Sessions";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explorer", element: <Explorer /> },
      { path: "/sessions", element: <Sessions /> },
      { path: "/chat", element: <Chat /> },
      { path: "/profil", element: <Profil /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
