
import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Products from "../Pages/Products"
import { ProductContext } from "./context/ProductContext"
import { vi, test, expect,} from "vitest"

test("Products lists items and calls removeProduct", () => {
  const products = [
    { id: 1, name: "Alpha", price: 10, category: "Cat", stock: 3, image: "" },
    { id: 2, name: "Beta", price: 20, category: "Cat", stock: 8, image: "" }
  ]

  const removeProduct = vi.fn()

  render(
    <ProductContext.Provider value={{ products, editProduct: vi.fn(), removeProduct }}>
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    </ProductContext.Provider>
  )

  expect(screen.getByText("Alpha")).toBeInTheDocument()
  expect(screen.getByText("Beta")).toBeInTheDocument()

  const deleteButtons = screen.getAllByText("Delete")
  fireEvent.click(deleteButtons[0])

  expect(removeProduct).toHaveBeenCalledWith(1)
})