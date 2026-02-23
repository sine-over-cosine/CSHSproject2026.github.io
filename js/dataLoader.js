// dataLoader.js

export async function loadProducts() {
  try {
    const response = await fetch("data/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}
