//Nhập vào số nguyên  n
let n = parseInt(prompt("Nhập vào số n"));

// Ib ra các số nguyên tố
console.log("Các số nguyên tố từ 1 đến n ", n, " là :");

//Kiểm tra số n có phải số nguyên tố không
if (n > 1) {
  for (index = 2; index < n; index++) {
    let checkPrime = true;
    for (let i = 2; i <= Math.sqrt(index); i++) {
      if (index % i == 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log(index);
    }
  }
} else {
  alert("Không có số nguyên tố nào");
}
