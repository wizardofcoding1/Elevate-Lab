// Dummy Categories
const categories = [
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Appliances",
    "Books",
    "Beauty",
    "Toys",
    "Sports",
];

// Dummy Products
const products = [
    {
        name: "Smartphone",
        price: 499,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
        name: "Watch",
        price: 199,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
        name: "Shoes",
        price: 79,
        img: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    },
    {
        name: "Headphones",
        price: 99,
        img: "https://images.unsplash.com/photo-1585386959984-a41552231658",
    },
    {
        name: "Laptop",
        price: 899,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
        name: "Backpack",
        price: 49,
        img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
    },
];

// Render Categories (Horizontal Scroll)
const categoryContainer = document.getElementById("categories");
categories.forEach((cat) => {
    categoryContainer.innerHTML += `
    <div class="category">${cat}</div>
  `;
});

// Render Deals (Horizontal Scroll)
const dealsContainer = document.getElementById("deals");
products.forEach((product) => {
    dealsContainer.innerHTML += `
    <div class="product-card">
      <img src="${product.img}">
      <p>${product.name}</p>
      <div class="price">${product.price}</div>
    </div>
  `;
});

// Render Recommended (Vertical Grid)
const recommendedContainer = document.getElementById("recommended");
products.concat(products).forEach((product) => {
    recommendedContainer.innerHTML += `
    <div class="product-card">
      <img src="${product.img}">
      <p>${product.name}</p>
      <div class="price">$${product.price}</div>
    </div>
  `;
});
