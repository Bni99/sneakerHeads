import HomePage from "../pages/home-page";
import AppLayout from "./app-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/collections", element: <div>Collections</div> },
        { path: "/men", element: <div>Men Section</div> },
        { path: "/women", element: <div>Women Section</div> },
        { path: "/kids", element: <div>kids Section</div> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
