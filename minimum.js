/*The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.*/

function min(first, second) {
    let minimum = Math.min(first, second);
    return minimum;

}

console.log(min(20, 30));