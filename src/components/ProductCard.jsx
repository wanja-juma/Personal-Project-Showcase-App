import { Link } from "react-router-dom"

function ProductCard({ product, onEdit }) {
  return (
    <div className="card">
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name} style={{ cursor: "pointer" }} />
      </Link>

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: Ksh.{product.price.toFixed(2)}</p>

      <p>Stock: <span style={{ color: product.stock < 5 ? "#e74c3c" : "#27ae60" }}>{product.stock}</span></p>

      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <Link to={`/products/${product.id}`} style={{ flex: 1, textDecoration: "none" }}>
          <button style={{ width: "100%", padding: "8px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            View Details
          </button>
        </Link>

        <button
          onClick={() => onEdit(product)}
          style={{ flex: 1, padding: "8px", backgroundColor: "#f39c12", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Edit Price
        </button>
      </div>
    </div>
  )
}

export default ProductCard;