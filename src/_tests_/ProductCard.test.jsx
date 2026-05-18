import {
  render,
  screen
} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import ProductCard from "../components/ProductCard"
import { test, expect,} from "vitest"

test("renders product name", () => {
  const product = {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 5,
    image: ""
  }

  render(
    <MemoryRouter>
      <ProductCard
        product={product}
        onEdit={() => {}}
      />
    </MemoryRouter>
  )

  expect(
    screen.getByText(/Laptop/i)
  ).toBeInTheDocument()
})