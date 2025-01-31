function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = { id, name, price, image };
    
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === id);
    if (existingItemIndex === -1) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

// Initial update of cart count
updateCartCount();
