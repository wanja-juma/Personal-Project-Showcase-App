
import { render, screen } from "@testing-library/react"
import { ProductContext, useProducts } from "../context/ProductContext"
import {test, expect,} from "vitest"

function TestComp() {
  const products = useProducts()
  return <div>Count: {products.length}</div>
}

test("useProducts returns products from context", () => {
  const sample = [{ id: 1, name: "A" }]

  render(
    <ProductContext.Provider value={{ products: sample }}>
      <TestComp />
    </ProductContext.Provider>
  )

  expect(screen.getByText("Count: 1")).toBeInTheDocument()
})
