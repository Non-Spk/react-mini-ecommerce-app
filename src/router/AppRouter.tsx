import HomePage from "@/pages/home";
import ProductDetailPage from "@/pages/productDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: '/product/:id',
            element: <ProductDetailPage />,
        }
    ])

    return < RouterProvider router={router} />
}