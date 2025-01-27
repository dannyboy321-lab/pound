
const products = [
    { name: 'Product 1', price: 100, description: 'Cool gadget 1', image: 'images/product1.jpg' },
    { name: 'Product 2', price: 200, description: 'Cool gadget 2', image: 'images/product2.jpg' },
    { name: 'Product 3', price: 300, description: 'Cool gadget 3', image: 'images/product3.jpg' }
];


const displayProducts = () => {
    const productList = document.getElementById('productList');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
};

const addToCart = (index) => {
    alert('Product added to cart');
    
};
