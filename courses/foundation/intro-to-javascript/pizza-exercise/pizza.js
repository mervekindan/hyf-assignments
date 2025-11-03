console.log("I love pizza");
const myFavoritePizza = "Margherita";
let priceOfPizza = 89.9;
const amountOfPizzas = 4;
const isPizzaTakeaway = true;
const totalPrice = priceOfPizza * amountOfPizzas;

let orderType;

if (isPizzaTakeaway === true) {
    orderType = "Takeaway";
} else {
    orderType = "Dine-in";
}

console.log(
    "New pizza order: " +
        orderType +
        " " +
        amountOfPizzas +
        " " +
        myFavoritePizza +
        " pizzas. Total cost for the order is: " +
        totalPrice
);
