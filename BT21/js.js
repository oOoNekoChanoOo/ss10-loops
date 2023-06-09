let resource;
do {
    resource = parseInt(prompt("Nhập vào số nhiên liệu"));
    if(isNaN(resource)){
        alert("Vui lòng nhập số nhiên liệu là một số");
    } else {
        if (resource < 5000 || resource > 30000){
            alert("Vui lòng nhập số nhiên liệu có giá trị trong khoảng 5000 đến 30000");
        } else {
            break;
        }
    }
}while(true);

let pilot;
do {
    pilot = parseInt(prompt("Nhập vào số phi hành gia"));
    if(isNaN(pilot)){
        alert("Vui lòng nhập số nhiên liệu là một số");
    } else {
        if (pilot < 1 || pilot > 8){
            alert("Vui lòng nhập số nhiên liệu có giá trị trong khoảng 1-7");
        } else {
            break;
        }
    }
}while(true);

let resource50km = 100 * pilot;
let times = Math.floor(resource / resource50km);
let maxHight = times * 50;
let resourceRemain = resource%resource50km;

alert("Độ cao tối đa: "+ maxHight+"- Số nhiên liệu còn lại: "+resourceRemain);