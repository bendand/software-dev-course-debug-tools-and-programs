const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { 
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate > 1 || discountRate < 0) {
    throw Error(`Discount rate must be greater than or equal to 0 and less than or equal to 1`);
  }
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

// document.getElementById("total").textContent = `Total: $${discountedTotal}`;
// document.getElementById("receipt").textContent = receipt;

if (typeof document !== "undefined") {
  document.getElementById("total").textContent = `Total: $${discountedTotal}`;
  document.getElementById("receipt").textContent = receipt;
}