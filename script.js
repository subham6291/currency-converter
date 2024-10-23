let button = document.querySelector(".convert-btn");

button.addEventListener("click", () => {
  const rates = {
    USD: { INR: 83, EUR: 0.95 },
    EUR: { INR: 87, USD: 1.05 },
    INR: { USD: 0.012, EUR: 0.011 },
  };

  let amount = parseFloat(document.getElementById("amount").value);
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;

  let convertedAmount = amount * rates[fromCurrency][toCurrency];

  alert(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
});
