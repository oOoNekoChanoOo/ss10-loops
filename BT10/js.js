let n = parseInt(prompt("Nhập số nguyên n:"));
let laSoNguyenTo = n >= 2;
for (let i = 2; i * i <= n; i++) {
  if (n % i === 0) {
    laSoNguyenTo = false;
    break;
  }
}

console.log(laSoNguyenTo ? n + " là số nguyên tố." : n + " không phải là số nguyên tố.");
