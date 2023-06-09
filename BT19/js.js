for (let i = 100; i <= 999; i++){
    firstNum = i % 10;
    secondNum = Math.floor(i/10)%10;
    thirdNum = Math.floor(i/100)%10;
    if (
        Math.pow(firstNum,3) +
        Math.pow(secondNum,3) +
        Math.pow(thirdNum,3) ==
     i
    ) {
        console.log(i);
    }
}