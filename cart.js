function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartList.appendChild(cartItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
    document.getElementById('cart-count').innerText = cart.length;
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Filter out the item with the given id
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Initial display of cart items
displayCart();
