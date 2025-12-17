import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>HomePage</div>,
        },
        {
            path: '/product/:id',
            element: <div>ProductDetailPage</div>,
        }
    ])

    return < RouterProvider router={router} />
}