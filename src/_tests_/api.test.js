import { vi, test, expect, describe, global, afterEach} from "vitest"
import { addProduct, updateProduct } from "../services/api"

describe("api layer", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("addProduct posts and returns created product", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 10, name: "X" })
    })

    const result = await addProduct({ name: "X", price: 9 })

    expect(result.id).toBe(10)
    expect(global.fetch).toHaveBeenCalled()
    const calledWith = global.fetch.mock.calls[0]
    expect(calledWith[0]).toContain("/products")
    expect(calledWith[1].method).toBe("POST")
  })

  test("updateProduct sends PATCH and returns updated resource", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, price: 20 })
    })

    const res = await updateProduct(1, { price: 20 })

    expect(res.price).toBe(20)
    expect(global.fetch).toHaveBeenCalled()
    const calledWith = global.fetch.mock.calls[0]
    expect(calledWith[0]).toContain("/products/1")
    expect(calledWith[1].method).toBe("PATCH")
  })
})