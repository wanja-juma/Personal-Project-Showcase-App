import { useEffect, useState, useCallback } from "react"
import localData from "../../db.json"
import {
  getProducts,
  addProduct,
  updateProduct,
  replaceProduct,
  deleteProduct
} from "../Services/api"
import { ProductContext } from "./ProductContext"

function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      console.error("Failed to load products from API:", err)
      setError(err.message)
      setProducts(localData?.products ?? [])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const load = async () => {
      await fetchProducts()
    }

    if (isMounted) {
      load()
    }

    return () => {
      isMounted = false
    }
  }, [fetchProducts])

  async function createProduct(product) {
    setError(null)
    try {
      const newProduct = await addProduct(product)
      setProducts([...products, newProduct])
      return newProduct
    } catch (err) {
      const errorMsg = `Failed to create product: ${err.message}`
      setError(errorMsg)
      throw err
    }
  }

  async function editProduct(id, updatedData) {
    setError(null)
    try {
      const updated = await updateProduct(id, updatedData)
      setProducts(
        products.map(product =>
          product.id === id ? updated : product
        )
      )
      return updated
    } catch (err) {
      const errorMsg = `Failed to update product: ${err.message}`
      setError(errorMsg)
      throw err
    }
  }

  async function replaceProductData(id, completeData) {
    setError(null)
    try {
      const replaced = await replaceProduct(id, completeData)
      setProducts(
        products.map(product =>
          product.id === id ? replaced : product
        )
      )
      return replaced
    } catch (err) {
      const errorMsg = `Failed to replace product: ${err.message}`
      setError(errorMsg)
      throw err
    }
  }

  async function removeProduct(id) {
    setError(null)
    try {
      await deleteProduct(id)
      setProducts(
        products.filter(product => product.id !== id)
      )
    } catch (err) {
      const errorMsg = `Failed to delete product: ${err.message}`
      setError(errorMsg)
      throw err
    }
  }

  const clearError = () => setError(null)

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        createProduct,
        editProduct,
        replaceProductData,
        removeProduct,
        fetchProducts,
        clearError
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;







