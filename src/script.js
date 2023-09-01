import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResContainer from "./components/ResContainer";
import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/ResturantMenu";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import appStore from "./utils/appStore";
const AppLayOut = () => {
  return (
    <Provider store={appStore}>
      <div className="applayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <ResContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/resturant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
