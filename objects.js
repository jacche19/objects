/*
var pres = {
  fName: "Bernie",
  lName: "Sanders",
  age: 75
};
window.alert(pres.fName);
*/

var spicyAhi = {
  fishType: "Ahi",
  sauce: "Sriracha & Mayo",
  price: 100.00,
  rice: "White",
  ounces: 8
};
//Ask the user for amount of spicy ahi to buy.
var amount = prompt("Amount to buy");
//Display the total amount of ounces the user will buy.
var totalOunces = amount * spicyAhi.ounces;
window.alert("Buying " + totalOunces + " ounces.");
//Then display the total dollar amount.
var totalDollar = amount * spicyAhi.price;
window.alert("Your total price: $" + totalDollar.toFixed(2) + ".");
