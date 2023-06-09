let num1 = Number(prompt("Nhập vào số thứ nhất: "));
let num2 = Number(prompt("Nhập vào số thứ hai: "));
let math = prompt("Nhập vào phép tính: ");

let result;

switch (math) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  default:
    result = num1 / num2;
}

document.write("Kết quả của phép tính là: ", result);
