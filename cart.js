const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const cart1 = [
  { name: "Laptop", price: 1000 },
];

const cart2 = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 },
  { name: "Keyboard", price: 150 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { 
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (typeof discountRate !== "number" || Number.isNaN(discountRate)) {
    throw Error(`Discount rate is not a number.`);
  }
  if (discountRate > 1 || discountRate < 0) {
    throw Error(`Discount rate must be greater than or equal to 0 and less than or equal to 1.`);
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


const total1 = calculateTotal(cart1);
const discountedTotal1 = applyDiscount(total, 0.4); // 40% discount
const receipt1 = generateReceipt(cart, discountedTotal1);


const total2 = calculateTotal(cart2);
const discountedTotal2 = applyDiscount(total, 0.1); // 10% discount
const receipt2 = generateReceipt(cart, discountedTotal2);




document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


document.getElementById("total1").textContent = `Total: $${discountedTotal1}`;
document.getElementById("receipt1").textContent = receipt1;


document.getElementById("total2").textContent = `Total: $${discountedTotal2}`;
document.getElementById("receipt2").textContent = receipt2;

