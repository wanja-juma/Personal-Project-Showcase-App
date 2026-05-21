import { useState } from "react"

import {
  useProducts,
  useEditProduct,
  useRemoveProduct,
  useProductLoading,
 
} from "../context/ProductContext"

import ProductCard from "../components/ProductCard"
import ProductSearch from "../components/ProductSearch"

function Products() {
  const products = useProducts()
  const editProduct = useEditProduct()
  const removeProduct = useRemoveProduct()
  const loading = useProductLoading()
  

  const [search, setSearch] = useState("")

  function handleEdit(product) {
    const newPrice = prompt(
      "Enter new price:",
      product.price
    )

    if (newPrice) {
      editProduct(product.id, {
        price: Number(newPrice)
      })
    }
  }

  const filteredProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="page">
      <h1>Products</h1>

      `{loading && <p style={{ color: "blue" }}>Loading products...</p>}`
     

      <ProductSearch
        search={search}
        setSearch={setSearch}
      />

      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onEdit={handleEdit}
            />

            <button className="btn-delete"
              onClick={() =>
                removeProduct(product.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;