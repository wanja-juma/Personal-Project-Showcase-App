import { vi, test, expect, describe } from "vitest"
import { addProduct, updateProduct } from "./Services/api"

describe("api layer", () => {
  test("addProduct posts and returns created product", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 10, name: "X" })
    }))

    const result = await addProduct({ name: "X", price: 9 })

    expect(result.id).toBe(10)
    expect(globalThis.fetch).toHaveBeenCalled()
    const calledWith = globalThis.fetch.mock.calls[0]
    expect(calledWith[0]).toContain("/products")
    expect(calledWith[1].method).toBe("POST")
    vi.unstubAllGlobals()
  })

  test("updateProduct sends PATCH and returns updated resource", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, price: 20 })
    }))

    const res = await updateProduct(1, { price: 20 })

    expect(res.price).toBe(20)
    expect(globalThis.fetch).toHaveBeenCalled()
    const calledWith = globalThis.fetch.mock.calls[0]
    expect(calledWith[0]).toContain("/products/1")
    expect(calledWith[1].method).toBe("PATCH")
    vi.unstubAllGlobals()
  })
})