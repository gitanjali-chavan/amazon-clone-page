let cart = [];

function addToCart(name, price) {
    let item = { name, price };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let storedCart = localStorage.getItem("cart");

    if (storedCart) {
        cart = JSON.parse(storedCart);
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }
}

document.addEventListener("DOMContentLoaded", loadCart);