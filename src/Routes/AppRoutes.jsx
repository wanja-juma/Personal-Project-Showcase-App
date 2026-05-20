import { Routes, Route } from "react-router-dom"

import Home from "../Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Products from "../Pages/Products"
import ProductDetails from "../Pages/ProductDetails"
import AddProduct from "../Pages/AddProduct"
import NotFound from "../Pages/NotFound"

function AppRoutes() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Dashboard - Stats and Overview */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Product Listing Page */}
      <Route path="/products" element={<Products />} />

      {/* Product Details Page */}
      <Route path="/products/:id" element={<ProductDetails />} />

      {/* Add Product Form Page */}
      <Route path="/add-product" element={<AddProduct />} />

      {/* Catch-all Route for Invalid Pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;