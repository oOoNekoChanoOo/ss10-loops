total = 0;
do{
    let n = parseInt(prompt("Nhập vào một số"))
    if (n >=0){
        total +=n ;
    } else{
        break;
    }
}while(true);

console.log("Tổng là: " +total)