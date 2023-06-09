let a = Number(prompt("Nhập vào chiều dài cạnh thứ nhất: "));
let b = Number(prompt("Nhập vào chiều dài cạnh thứ hai: "));
let c = Number(prompt("Nhập vào chiều dài cạnh thứ ba: "));

// Kiểm tra điều kiện cho tam giác
if (a + b > c && a + c > b && c + b > a) {
  document.write("Đây là tam giác" + "<br>");

  // Kiểm tra tam giác cân
  if (a ==b || a==c || b==c ) {
    document.write("Đây là tam giác cân" + "<br>");
  } else {
    document.write("Đây không phải tam giác cân" + "<br>");
  }

  // Kiểm tra tam giác vuông
  if (
    a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b
  ) {
    document.write("Đây là tam giác vuông" + "<br>");
  } else {
    document.write("Đây không phải tam giác vuông" + "<br>");
  }

  // Kiểm tra tam giác đều
  if (a == b && b == c) {
    document.write("Đây là tam giác đều" + "<br>");
  } else {
    document.write("Đây không phải tam giác đều" + "<br>");
  }

} else {
  document.write("Đây không là tam giác" + "<br>");
}
