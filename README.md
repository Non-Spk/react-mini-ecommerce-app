# React Mini E-commerce App

This is a mini e-commerce application built with React, TypeScript, and Vite. It demonstrates core e-commerce functionalities like product listing, product details, category filtering, a shopping cart, and basic navigation.

## Features

*   **Product Listing:** Browse through a catalog of products.
*   **Product Details:** View detailed information for each product.
*   **Category Filtering:** Filter products by different categories.
*   **Shopping Cart:** Add, remove, and update product quantities in the cart.
*   **Responsive Design:** (Implicitly assumed, good practice for web apps)

## Technologies Used

*   **React:** Frontend library for building user interfaces.
*   **TypeScript:** Type-safe JavaScript.
*   **Vite:** Fast build tool and development server.
*   **Zustand:** State management (inferred from `stores` directory).
*   **React Router:** For navigation (inferred from `router` directory).

## Installation and Local Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   Node.js (LTS version recommended)
*   npm or Yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Non-Spk/react-mini-ecommerce-app.git
    cd react-mini-ecommerce-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

This will generate optimized static assets in the `dist` directory.

## Usage

*   Navigate through categories to browse products.
*   Click on a product to view its details.
*   Add products to the cart and manage quantities.
*   Use the search bar to find specific products.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

