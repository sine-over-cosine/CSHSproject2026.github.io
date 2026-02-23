// script.js

import { loadProducts } from "./dataLoader.js";
import { renderProducts, renderSingleProduct } from "./render.js";

document.addEventListener("DOMContentLoaded", async () => {
  const products = await loadProducts();

  const path = window.location.pathname;

  // If on catalog page
  if (path.includes("catalog.html")) {
    renderProducts(products);
  }

  // If on product page
  if (path.includes("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    renderSingleProduct(products, id);
  }
});
