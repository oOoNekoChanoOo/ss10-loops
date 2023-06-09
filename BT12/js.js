let n = parseInt(prompt("Nhập vào một số"));
let digit;
let reverseNumber = "";
while (n > 0){
    digit = n % 10;
    n = Math.floor(n / 10);
    reverseNumber += digit;
}   
console.log ("Số đảo ngược của số n là:" + reverseNumber)