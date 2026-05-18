import { createContext, useContext } from "react"

export const ProductContext = createContext()

export const useProductContext = () => {
  return useContext(ProductContext)
}

export const useProducts = () => {
  const { products } = useProductContext()
  return products
}

export const useCreateProduct = () => {
  const { createProduct } = useProductContext()
  return createProduct
}

export const useEditProduct = () => {
  const { editProduct } = useProductContext()
  return editProduct
}

export const useReplaceProduct = () => {
  const { replaceProductData } = useProductContext()
  return replaceProductData
}

export const useRemoveProduct = () => {
  const { removeProduct } = useProductContext()
  return removeProduct
}

export const useProductLoading = () => {
  const { loading } = useProductContext()
  return loading
}

export const useProductError = () => {
  const { error, clearError } = useProductContext()
  return { error, clearError }
}

export const useRefetchProducts = () => {
  const { fetchProducts } = useProductContext()
  return fetchProducts
}