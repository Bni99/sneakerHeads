import CollectionSection from "../pages/collection-section";
import HomePage from "../pages/home-page";
import ProductPage from "../pages/product-page";
import AppLayout from "./app-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/collections", element: <CollectionSection /> },
        { path: "/product/:id", element: <ProductPage /> },
        { path: "/men", element: <div>Men Section</div> },
        { path: "/women", element: <div>Women Section</div> },
        { path: "/kids", element: <div>kids Section</div> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
