let toggle = document.getElementById("toggle-checkbox");
toggle.addEventListener("click", yearlyBilling);
function yearlyBilling() {
  if (toggle.checked) {
    price = document.getElementById("priceNo").innerText;
    price = price.substring(1);
    price = price * 12 * 0.75;
    price = price.toFixed(2);
  } else {
    price = document.getElementById("priceNo").innerText;
    console.log(price);
    price = price.substring(1);
    price = (price * (10 / 7.5)) / 12;
    price = price.toFixed(2);
  }

  console.log(price);
  document.getElementById("priceNo").innerText = "$" + price;
}
console.log(toggle);
