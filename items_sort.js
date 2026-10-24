// Write a program that asks the user for a product name and searches the array.
// If the user enters "Laptop", display:;

let products = [
    { name: "Phone", price: 2000 },
    { name: "Laptop", price: 5000 },
    { name: "Headphones", price: 500 }
];

let seek = prompt("Search for a Product: ");
    if (seek === products[0].name) {
      console.log(products[0]);
    }

  else if (seek === products[1].name) {
    console.log(products[1]);
  } 
  
  else if (seek === products[2].name) {
     console.log(products[2]);
  }

  else {
    console.log("Out of stock");
  }
  
 console.log(seek);

// The loop is not actually checking anything so this is my amend

let found = false;
let seek_goods = prompt("Search for a Product: ");
for (let i = 0; i < products.length ; i++){
    if (seek_goods === products[i].name) {
      console.log(products[i]);
      found = true;
      break;
    } 
}

if (found === false) {
    console.log("Out of stock");
}

 console.log(seek_goods);