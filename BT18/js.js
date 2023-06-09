for (let i = 1; i <= 100; i++){
    let checkFizz = false;
    if (i % 3 ==0) {
        checkFizz = true;
    }
    let checkBuzz = false;
    if (i % 5 == 0) {
        checkBuzz = true;
    }
    console.log("Số",i,":");
    if (checkFizz && !checkBuzz){
        console.log("Fizz");
    } else if (!checkFizz && checkBuzz) {
        console.log("Buzz");
    } else if (checkFizz && checkBuzz) {
        console.log("FizzBuzz")
    }
}