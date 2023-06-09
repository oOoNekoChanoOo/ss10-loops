let n = parseInt(prompt("Nhập một số nguyên:"));
let sum = 0;

console.log("Các số chẵn từ 1 đến", n, ":");

for (let i = 1; i <= n; i++) {
  if(i % 2 == 0){
    sum += i;
  }
} 
console.log("Tổng các số chẵn:", sum);

