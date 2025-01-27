
const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};


const displayCart = () => {
    const cartContainer = document.getElementById('cartContainer');
    
    
    const user = JSON.parse(localStorage.getItem('LoggedInUser')) || { cart: [] };

    
    if (!cartContainer || user.cart.length === 0) {
        cartContainer.innerHTML = 'Your cart is empty.';
        return;
    }

    
    user.cart.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'cart-product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-product-image">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(productDiv);
    });
};


const addToCart = (index) => {
    
    const user = JSON.parse(localStorage.getItem('LoggedInUser')) || { cart: [] };

    
    const products = JSON.parse(localStorage.getItem('AllProducts')) || [];

    
    const selectedProduct = products[index];
    user.cart.push(selectedProduct);

    
    localStorage.setItem('LoggedInUser', JSON.stringify(user));

    
    alert('Product added to cart!');
};


const removeFromCart = (index) => {
    
    const user = JSON.parse(localStorage.getItem('LoggedInUser')) || { cart: [] };

    
    user.cart.splice(index, 1);

    
    localStorage.setItem('LoggedInUser', JSON.stringify(user));

   
    displayCart();
};

window.onload = displayCart;
