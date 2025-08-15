import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/product-detail/:id",
        element: <ProductDetailPage />,
      },

      {
        path: "/wishlist",
        element: <WishlistPage />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
