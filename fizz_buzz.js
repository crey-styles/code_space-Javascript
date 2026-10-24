for (let fizz_game = 1; fizz_game <= 100 ; fizz_game++)
{
    if (fizz_game % 3 === 0 && fizz_game % 5 === 0)
    {
        console.log("FizzBuzz!");
        continue;
    }

    else if (fizz_game % 3 === 0) 
    {
        console.log("Fizz");
        continue;
    }

    else if (fizz_game % 5 === 0)
    {
        console.log("Buzz");
        continue;
    }

    console.log(fizz_game);
}