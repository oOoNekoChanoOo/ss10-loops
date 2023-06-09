let num1 = parseInt(prompt("Nhập vào số thứ nhất"));
let num2 = parseInt(prompt("Nhập vào số thứ hai"));
let num3 = parseInt(prompt("Nhập vào số thứ ba"));

let result= num1 * num2 * num3;

if (result < 0){
    console.log("Dấu tích của 3 số là -");
} else if (result > 0) {
    console.log("Dấu tích của 3 số là +");
}else {
    console.log("Tích của ba số là 0");
}