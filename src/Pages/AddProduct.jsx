import { useState, useRef, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import { useCreateProduct, useProductError } from "../Context/ProductContext"

function AddProduct() {
  const createProduct = useCreateProduct()
  const { error, clearError } = useProductError()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  const inputRef = useRef()

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: ""
  })

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    clearError()

    try {
      await createProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      })
      navigate("/products")
    } catch (err) {
      console.error("Failed to create product:", err)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <h1>Add Product</h1>

      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          
        </div>
      )}
    <div className="form-container">
      <form className="form-product" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </form>
      </div>
    </div>
  )
}

export default AddProduct;