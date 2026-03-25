const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const resultOutput = document.getElementById("result");

let rates = {};

async function getRates() {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();

    rates = data.rates;

    fillCurrencies();
    convert();
}

function fillCurrencies() {
    Object.keys(rates).forEach((currency) => {
        const fromOption = document.createElement("option");
        const toOption = document.createElement("option");

        fromOption.value = toOption.value = currency;
        fromOption.textContent = toOption.textContent = currency;

        fromCurrency.appendChild(fromOption);
        toCurrency.appendChild(toOption);
    });

    fromCurrency.value = "EUR";
    toCurrency.value = "DKK";
}

function convert() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || !rates[from] || !rates[to]) {
        resultOutput.textContent = "Enter amount";
        return;
    }

    const converted = (amount / rates[from]) * rates[to];

    resultOutput.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}

amountInput.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

getRates();
