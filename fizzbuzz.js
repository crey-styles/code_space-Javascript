for (let buzz_game = 1; buzz_game <= 100 ; buzz_game++)
{
    let buzz = "";
    if (buzz_game % 3 == 0) buzz = "Fizz";
    if (buzz_game % 5 == 0) buzz = "Buzz"; 

    console.log(buzz || buzz_game);
}

// First Eloquent JavaScript Assignment

for (let angle_set = "#" ; angle_set.length <=7 ; angle_set += "#")
{
    console.log(angle_set);
}