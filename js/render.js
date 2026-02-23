// render.js

export function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" width="150">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <a href="product.html?id=${product.id}">View</a>
    `;

    grid.appendChild(card);
  });
}


export function renderSingleProduct(products, id) {
  const product = products.find(p => p.id == id);
  if (!product) return;

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = "$" + product.price;

  const img = document.getElementById("productImage");
  if (img) img.src = product.image;
}
