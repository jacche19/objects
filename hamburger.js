var hamburger = {
  veg: ["Lettuce", "Tomato", "Onion"],
  meat: "shark",
  mayo: true,
  mustard: true,
  ketchup: true,
  price: 50,
  ounces: 8
}

//Ask user for how many they want to buy
//Tell them how much it will be and how many ounces they will get

var num = prompt("How many?");
var cost = num * hamburger.price;
window.alert("It will cost $" + cost.toFixed(2) + " for " + hamburger.ounces + " ounces.");

//change price of hamburger
var x = prompt("What is the new price of the hamburger?");
hamburger.price = x;
window.alert(hamburger.price);