document.addEventListener("DOMContentLoaded", function() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    let cart = [];

    function renderCart() {
        cartItemsElement.innerHTML = "";
        let totalPrice = 0;
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <img src="film${item.id}.jpg" alt="${item.name}">
                <p>${item.name} - $${item.price}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartItemsElement.appendChild(itemElement);
            totalPrice += item.price;
        });
        totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    function addToCart(id, name, price) {
        const item = { id, name, price };
        cart.push(item);
        renderCart();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id != id);
        renderCart();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const product = this.parentNode;
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);
            addToCart(id, name, price);
        });
    });

    document.querySelectorAll(".remove-from-cart").forEach(button => {
        button.addEventListener("click", function() {
            const id = parseInt(this.dataset.id);
            removeFromCart(id);
        });
    });

    checkoutButton.addEventListener("click", function() {
        alert("Thank you for your purchase!");
        cart = [];
        renderCart();
    });
});