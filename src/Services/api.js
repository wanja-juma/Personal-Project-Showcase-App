const BASE_URL = "http://localhost:3001/products"

// Fetch all products
export async function getProducts() {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

// Fetch single product
export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    throw error
  }
}

// Add new product (POST)
export async function addProduct(product) {
  try {
    if (!product.name || !product.price) {
      throw new Error("Product name and price are required")
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    if (!response.ok) {
      throw new Error(`Failed to add product: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

// UPDATE - Partial update (PATCH)
export async function updateProduct(id, updatedData) {
  try {
    if (!id) {
      throw new Error("Product ID is required")
    }

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })

    if (!response.ok) {
      throw new Error(`Failed to update product: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error updating product ${id}:`, error)
    throw error
  }
}

// UPDATE - Full replacement (PUT)
export async function replaceProduct(id, completeData) {
  try {
    if (!id) {
      throw new Error("Product ID is required")
    }
    if (!completeData.name || !completeData.price) {
      throw new Error("Product must have name and price")
    }

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(completeData)
    })

    if (!response.ok) {
      throw new Error(`Failed to replace product: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error replacing product ${id}:`, error)
    throw error
  }
}

// DELETE - Remove product
export async function deleteProduct(id) {
  try {
    if (!id) {
      throw new Error("Product ID is required")
    }

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })

    if (!response.ok) {
      throw new Error(`Failed to delete product: ${response.status} ${response.statusText}`)
    }
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error)
    throw error
  }
}