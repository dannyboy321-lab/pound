
const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};


const products = [
    { name: 'Chanel', price: 234, description: 'Chanel Chance Eau Tendre’s quince and grapefruit', image: 'images/Chance-Eau-Tendre-Perfume-By-Chanel.jpg' },
    { name: 'Tom Ford', price: 321, description: 'Tom Ford Black Orchid’s truffle, gardenia, and blackcurrant appeal, and sits itself down confidently on a superyacht sundeck with a quick spritz of Eau De Soleil Blanc.', image: 'images/Black-Orchid-Perfume-By-Tom-Ford.jpg' },
    { name: 'Dolce & Gabbana', price: 350, description: 'Dolce & Gabbana Light Blue shimmers in the sunshine. It’s a tale of summer days under the sun with woody, citrus notes.', image: 'images/Dolce-Gabbana-Light-Blue-Perfume-for-Women.jpg' },
    { name: 'Gucci', price: 330, description: 'Gucci scents tend to be floral based, ranging from sweet and innocent (like Bloom’s jasmine and tuberose notes) to darker and more daring (like Rush’s coriander, Damask rose, and patchouli).', image: 'images/Gucci-Bloom-Perfume.jpg' },
];


if (!localStorage.getItem('AllProducts')) {
    saveToLocalStorage('AllProducts', products);
}


const displayProducts = () => {
    const productList = document.getElementById('productList');
    if (!productList) return;

    const products = getFromLocalStorage('AllProducts');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
};


const addToCart = (index) => {
    const user = JSON.parse(localStorage.getItem('LoggedInUser')) || { cart: [] };

   
    if (!user.cart) {
        user.cart = [];
    }

    const products = getFromLocalStorage('AllProducts');
    user.cart.push(products[index]);

    
    saveToLocalStorage('LoggedInUser', user);
    alert('Product added to cart.');
};


window.onload = displayProducts;
