import { useProducts, useProductLoading } from "./context/ProductContext"

function Dashboard() {
  const products = useProducts()
  const loading = useProductLoading()

  const totalProducts = products.length
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0)
  const lowStockItems = products.filter(product => product.stock < 5)
  const categories = [...new Set(products.map(product => product.category))]

  return (
    <div className="page">
      <h1>Dashboard</h1>

      {loading && <p>Loading dashboard data...</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Products</h3>
          <p style={{ fontSize: "32px", fontWeight: "bold", color: "#3498db" }}>{totalProducts}</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Inventory Value</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#2ecc71" }}>Ksh.{totalValue.toFixed(2)}</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Low Stock Items</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#e74c3c" }}>{lowStockItems.length}</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Total Categories</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#f39c12" }}>{categories.length}</p>
        </div>
      </div>

      {lowStockItems.length > 0 && (
        <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#ffe6e6", borderRadius: "8px" }}>
          <h3> Low Stock Alert</h3>
          <p>The following products have less than 5 items in stock:</p>
          <ul>
            {lowStockItems.map(product => (
              <li key={product.id}>{product.name} - Stock: {product.stock}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#e6f3ff", borderRadius: "8px" }}>
        <h3>Categories</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {categories.map(category => (
            <span key={category} style={{ backgroundColor: "#3498db", color: "white", padding: "8px 12px", borderRadius: "4px" }}>
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;