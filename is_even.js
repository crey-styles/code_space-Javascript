/*We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd: */


function isEven(n) {
    if (n === 0) return true;

    if (n === 1) return false;
    return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(20));
console.log(isEven(700));
console.log(isEven(1));
console.log(isEven(0));
console.log(isEven(45));
console.log(isEven(99));