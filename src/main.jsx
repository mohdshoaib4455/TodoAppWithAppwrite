import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./store/Context.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Components/Signin.jsx";
import SignUp from "./Components/SignUp.jsx";
import Home from "./Components/Home.jsx";
import Welcom from "./Components/Welcom.jsx";
import Protect from "./Components/Protect.jsx";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcom />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: (
          <Protect>
            <Home />
          </Protect>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </StrictMode>
);
