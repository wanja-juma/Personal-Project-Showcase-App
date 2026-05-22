
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AppRoutes from "../Routes/AppRoutes"
import NavigationBar from "../components/NavigationBar"
import { ProductContext } from "../Context/ProductContext"
import { test, expect,} from "vitest"

test("NavigationBar links are present and routes render", () => {
  render(
    <ProductContext.Provider value={{ products: [] }}>
      <MemoryRouter initialEntries={["/"]}>
        <NavigationBar />
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