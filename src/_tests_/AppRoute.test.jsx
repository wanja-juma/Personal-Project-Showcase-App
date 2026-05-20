
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AppRoutes from "../Routes/AppRoutes"
import Navbar from "../components/NavBar"
import { ProductContext } from "./context/ProductContext"
import { test, expect,} from "vitest"

test("Navbar links are present and routes render", () => {
  render(
    <ProductContext.Provider value={{ products: [] }}>
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <AppRoutes />
      </MemoryRouter>
    </ProductContext.Provider>
  )

  expect(screen.getByText("Home")).toBeInTheDocument()
  expect(screen.getByText("Dashboard")).toBeInTheDocument()
  expect(screen.getByText("Shop")).toBeInTheDocument()
  // Check for the add-product link by its href attribute
  expect(screen.getByRole("link", { name: "Admin Portal" })).toHaveAttribute("href", "/add-product")
})