document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const products = {
        product1: { name: 'Product 1', price: 29.99, image: 'images/product1.jpg', description: 'Description for Product 1' },
        product2: { name: 'Product 2', price: 39.99, image: 'images/product2.jpg', description: 'Description for Product 2' },
        product3: { name: 'Product 3', price: 19.99, image: 'images/product3.jpg', description: 'Description for Product 3' }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('product-details').innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button onclick="addToCart('${productId}', '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
    }
});
