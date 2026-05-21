import { useParams, useNavigate } from "react-router-dom"
import { useProducts, useEditProduct } from "../context/ProductContext"
import { useState } from "react"

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = useProducts()
  const editProduct = useEditProduct()
  const [isEditing, setIsEditing] = useState(false)
  const [editedPrice, setEditedPrice] = useState("")
  const [editedStock, setEditedStock] = useState("")

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    )
  }

  const handleEditClick = () => {
    setEditedPrice(product.price)
    setEditedStock(product.stock)
    setIsEditing(true)
  }

  const handleSaveChanges = async () => {
    try {
      await editProduct(product.id, {
        price: Number(editedPrice),
        stock: Number(editedStock)
      })
      setIsEditing(false)
    } catch (error) {
      console.error("Failed to update product:", error)
    }
  }

  return (
    <div className="page">
      <button onClick={() => navigate("/products")} style={{ marginBottom: "20px" }}>
        ← Back to Products
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", maxWidth: "900px" }}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "8px", objectFit: "cover", height: "400px" }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>

          <p><strong>Category:</strong> {product.category}</p>

          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2ecc71", margin: "10px 0" }}>
            Price: Ksh.{product.price}
          </div>

          <div style={{ fontSize: "18px", marginBottom: "20px" }}>
            <strong>Stock:</strong> <span style={{ color: product.stock < 5 ? "#e74c3c" : "#27ae60" }}>{product.stock} units</span>
          </div>

          {product.stock < 5 && (
            <div style={{ padding: "10px", backgroundColor: "#ffe6e6", borderRadius: "4px", marginBottom: "20px" }}>
              Low stock warning
            </div>
          )}

          {!isEditing ? (
            <button onClick={handleEditClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
              Edit Product
            </button>
          ) : (
            <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
              <h3>Edit Product</h3>
              <div style={{ marginBottom: "10px" }}>
                <label>Price: </label>
                <input
                  type="number"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                  step="0.01"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>Stock: </label>
                <input
                  type="number"
                  value={editedStock}
                  onChange={(e) => setEditedStock(e.target.value)}
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={handleSaveChanges} style={{ padding: "8px 16px", backgroundColor: "#2ecc71", color: "white", cursor: "pointer", border: "none", borderRadius: "4px" }}>
                  Save Changes
                </button>
                <button onClick={() => setIsEditing(false)} style={{ padding: "8px 16px", backgroundColor: "#95a5a6", color: "white", cursor: "pointer", border: "none", borderRadius: "4px" }}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;