var yellow = {
 name: "Yellow Curry",
 veg: ["Potatoes", " Carrots", " Onions", " Peas"],
 meat: "Pork",
 spice: "Mild",
 des: "Uses tumeric as a source of color.",
 price: 13.99
};



var red = {
 name: "Red Curry",
 veg: ["Eggplant", " Onions", " Snap Peas"],
 meat: "Lamb",
 spice: "Call 911",
 des: "Uses many red thai chili peppers for color.",
 price: 16.99
};

document.getElementById('showYellowName').innerHTML = yellow.name;
document.getElementById('showYellowVegMeat').innerHTML = yellow.veg + ", and " + yellow.meat;
document.getElementById('showYellowSpice').innerHTML = "Spiciness: " + yellow.spice;
document.getElementById('showYellowPrice').innerHTML = "$" + yellow.price;

document.getElementById('showRedName').innerHTML = red.name;
document.getElementById('showRedVegMeat').innerHTML = red.veg + ", and " + red.meat;
document.getElementById('showRedSpice').innerHTML = "Spiciness: " + red.spice;
document.getElementById('showRedPrice').innerHTML = "$" + red.price;

function yPrice() {
  var totalY = (yellow.price * 1.04712);
  document.getElementById('finalY').innerHTML = ("Price: $" + totalY.toFixed(2));
}
  
function rPrice() {
  var totalR = (red.price * 1.04712);
  document.getElementById('finalR').innerHTML = ("Price: $" + totalR.toFixed(2));
}