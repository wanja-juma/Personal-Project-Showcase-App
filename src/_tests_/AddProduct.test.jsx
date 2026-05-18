import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AddProduct from "../Pages/AddProduct"
import { ProductContext } from "../context/ProductContext"
import { vi, test, expect,} from "vitest"

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: () => vi.fn()
  }
})

test("AddProduct calls createProduct with parsed numeric fields", async () => {
  const createProduct = vi.fn().mockResolvedValue({ id: 5 })

  render(
    <ProductContext.Provider value={{ createProduct, clearError: vi.fn() }}>
      <MemoryRouter>
        <AddProduct />
      </MemoryRouter>
    </ProductContext.Provider>
  )

  fireEvent.change(screen.getByPlaceholderText("Product Name"), { target: { value: "New Item" } })
  fireEvent.change(screen.getByPlaceholderText("Price"), { target: { value: "42" } })
  fireEvent.change(screen.getByPlaceholderText("Category"), { target: { value: "Gadgets" } })
  fireEvent.change(screen.getByPlaceholderText("Stock"), { target: { value: "7" } })
  fireEvent.change(screen.getByPlaceholderText("Image URL"), { target: { value: "http://img" } })

  fireEvent.click(screen.getByRole("button", { name: /add product/i }))

  await waitFor(() => {
    expect(createProduct).toHaveBeenCalledWith(expect.objectContaining({ name: "New Item", price: 42, stock: 7 }))
  })
})