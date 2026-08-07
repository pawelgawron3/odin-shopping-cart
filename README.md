# 🕶️ Velora

**Velora** is a modern eyewear e-commerce frontend web application built with React and designed around a clean, responsive shopping experience. The application allows users to browse products, view detailed product information, manage quantities, and add or remove items from a shopping cart.

The project focuses on **reusable components, centralized state management, API integration, and clean React architecture**.

---

## ✨ Features

- Browse a collection of eyewear products
- Dynamic product details fetched from an external API
- Interactive product image gallery
- Product quantity management
- Shopping cart with:
  - Add and remove products
  - Update product quantities
  - Clear the entire cart
  - Automatic item count and total price calculation

- Responsive design
- Reusable React components
- Global cart state management with Context API and `useReducer`
- Custom React hooks
- Component testing with React Testing Library and Vitest

---

## ⚙️ How It Works

### 🛍️ Product Browsing

Products are fetched from the **DummyJSON API** and normalized through a data adapter before being used throughout the application.

Users can browse the available eyewear and navigate to individual product pages for more details.

### 🔍 Product Details

Each product page provides:

- Product information
- Product image gallery
- Selectable product images
- Quantity controls
- Add to Cart functionality

### 🛒 Cart Management

The shopping cart is managed globally using **React Context and `useReducer`**.

This allows different parts of the application - such as the header, product details, cart items, and cart summary — to access and update the same cart state.

The cart supports:

- Adding products
- Increasing quantities of existing products
- Updating quantities
- Removing individual products
- Clearing the entire cart
- Calculating total items and total price

### 🧭 Navigation

**React Router** is used for client-side navigation between pages.

---

## 🧰 Tech Stack

| Technology                   | Purpose                                |
| ---------------------------- | -------------------------------------- |
| ⚡ **Vite**                  | Development environment and build tool |
| ⚛️ **React**                 | UI development                         |
| 🧭 **React Router**          | Client-side routing                    |
| 🗂️ **Context API**           | Global cart state                      |
| 🔄 **useReducer**            | Cart state management                  |
| 🪝 **Custom Hooks**          | Reusable application logic             |
| 🎨 **CSS Modules**           | Component-scoped styling               |
| 🖼️ **Lucide React**          | Nice interface icons                   |
| 🌐 **DummyJSON API**         | Product data (external API)            |
| 🧪 **Vitest**                | Test runner                            |
| 🧑‍🔬 **React Testing Library** | Component testing                      |

---

## 🧪 Testing

The project uses **Vitest** and **React Testing Library** for component and application logic testing.

Current tests cover important functionality such as:

- `ProductCard` rendering and navigation
- Cart item addition
- Adding an existing product and increasing its quantity

Run the test suite with:

```bash
npm run test
```

---

## 📁 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── context/         # Global application state
├── helpers/         # Utility functions and data adapters
├── hooks/           # Custom React hooks
├── layouts/         # Application layouts
├── pages/           # Route-level pages
├── router/          # Routing configuration
├── services/        # API
├── styles/          # CSS Modules
├── main.jsx         # Application's entry point
└── setupTests.js    # Test environment setup
```

---

## 🌐 Live Demo

### 🚀 [View Velora Live](add_deployment_link_on_netlify)
