// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart
function addToCart(price, quantity) {
    let qty = Number(quantity);

    if (qty > 0) {
        cart.push(price * qty);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// Detect page
let page = window.location.pathname;


// TICKET FUNCTIONS
function buyTicket1(event) {
    event.preventDefault();
    let qty = document.getElementById("ticket1Qty").value;
    addToCart(500, qty);
    alert("Added " + qty + " ticket(s) to your cart!");
}

function buyTicket2(event) {
    event.preventDefault();
    let qty = document.getElementById("ticket2Qty").value;
    addToCart(300, qty);
    alert("Added " + qty + " ticket(s) to your cart!");
}

function buyTicket3(event) {
    event.preventDefault();
    let qty = document.getElementById("ticket3Qty").value;
    addToCart(750, qty);
    alert("Added " + qty + " ticket(s) to your cart!");
}


// MERCH FUNCTIONS
function buyMerch1(event) {
    event.preventDefault();
    let qty = document.getElementById("merch1Qty").value;
    addToCart(80, qty);
    alert("Added " + qty + " item(s) to your cart!");
}

function buyMerch2(event) {
    event.preventDefault();
    let qty = document.getElementById("merch2Qty").value;
    addToCart(120, qty);
    alert("Added " + qty + " item(s) to your cart!");
}

function buyMerch3(event) {
    event.preventDefault();
    let qty = document.getElementById("merch3Qty").value;
    addToCart(120, qty);
    alert("Added " + qty + " item(s) to your cart!");
}


// CONNECT BUTTONS
if (page.includes("tickets.html")) {
    document.getElementById("ticket1Btn").onclick = function(event) { buyTicket1(event); };
    document.getElementById("ticket2Btn").onclick = function(event) { buyTicket2(event); };
    document.getElementById("ticket3Btn").onclick = function(event) { buyTicket3(event); };
}

if (page.includes("merch.html")) {
    document.getElementById("merch1Btn").onclick = function(event) { buyMerch1(event); };
    document.getElementById("merch2Btn").onclick = function(event) { buyMerch2(event); };
    document.getElementById("merch3Btn").onclick = function(event) { buyMerch3(event); };
}


// CHECKOUT PAGE
if (page.includes("checkout.html")) {

    let output = document.getElementById("checkoutOutput");

    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i];
    }

    let tax = subtotal * 0.07;
    let total = subtotal + tax;

    let discount = 0;
    if (total > 1000) {
        discount = total * 0.10;
        total -= discount;
    }

    output.innerHTML = `
        <h3>Your Checkout Summary</h3>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p>Discount: $${discount.toFixed(2)}</p>
        <h4>Total: $${total.toFixed(2)}</h4>
    `;
}


function clearCart() {
    localStorage.removeItem("cart");
    alert("Cart has been cleared.");
    location.reload();
}
