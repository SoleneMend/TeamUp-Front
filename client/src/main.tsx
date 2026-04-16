import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Explorer from "./pages/Explorer/Explorer";
import Home from "./pages/Home/Home";
import Profil from "./pages/Profil/Profil";

import "./index.css";

// import Events from "./pages/Events/Events";
// import Sessions from "./pages/Sessions/Sessions";
// import Chat from "./pages/Chat/Chat";
// import Profil from "./pages/Profil/Profil";

// Create router configuration with routes & You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explorer",
        element: <Explorer />,
      },
      // {
      //   path: "/events",
      //   element: <Events />,
      // },
      // {
      //   path: "/sessions",
      //   element: <Sessions />,
      // },
      // {
      //   path: "/chat",
      //   element: <Chat />,
      // },
      {
        path: "/profil",
        element: <Profil />,
      },
    ],
  },
]);

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
