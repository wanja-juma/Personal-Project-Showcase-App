import { NavLink } from "react-router-dom"
import "./NavBar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Admin Portal</h2>
        </div>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Shop
          </NavLink>

          <NavLink
            to="/add-product"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Admin Portal
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;