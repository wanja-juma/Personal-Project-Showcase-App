import {
  render,
  screen,
  fireEvent
} from "@testing-library/react"
import { vi, test, expect,} from "vitest"

import ProductSearch from "../components/ProductSearch"

test("updates search input", () => {
  const setSearch = vi.fn()

  render(
    <ProductSearch
      search=""
      setSearch={setSearch}
    />
  )

  const input =
    screen.getByPlaceholderText(/search/i)

  fireEvent.change(input, {
    target: { value: "keyboard" }
  })

  expect(setSearch).toHaveBeenCalled()
})