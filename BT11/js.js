let n = parseInt(prompt("Nhập số nguyên n:"));
let sum = 0;

for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum += i;
  }
}

let laSoHoanHao = (sum === n);
console.log(laSoHoanHao ? n + " là số hoàn hảo." : n + " không phải là số hoàn hảo.");
