let amount = parseInt(prompt("Nhập vào số tiền ban đầu"));
let rate = parseInt(prompt("Nhập vào lãi suất"));
let months = parseInt(prompt("Nhập vào số tháng muốn gửi"));
interest = 0;
let rateMonth= rate/12;
for (let i = 1; i <= months; i++){
    interestMonth = rateMonth * amount /100;
    amount = amount + interestMonth;
    interest +=interestMonth
}
document.write("Số tiền sau khi kết thúc gửi là: ",amount.toFixed(2),"<br>");
document.write("Số tiền lãi sau khi kết thúc gửi là: " +interest.toFixed(2))
