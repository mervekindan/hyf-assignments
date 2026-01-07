console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector(".product-list");

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const li = document.createElement("li");

        li.innerHTML = `<h3><bold>${products[i].name}</bold></h3>
<p>Price: ${products[i].price} dkk</p>
<p>Rating: ${products[i].rating}</p>`;

        if (products[i].rating >= 7) {
            li.style.borderColor = "#90e690ff";
            li.style.backgroundColor = "#e6ffe6ff";
        }

        productList.appendChild(li);
    }
}

renderProducts(products);
