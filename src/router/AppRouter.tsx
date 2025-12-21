import HomePage from "@/pages/home";
import ProductDetailPage from "@/pages/productDetail";
import { createHashRouter, RouterProvider } from "react-router-dom";

export default function AppRouter() {
    const router = createHashRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/product/:id",
            element: <ProductDetailPage />,
        }
    ]);

    return <RouterProvider router={router} />
}
