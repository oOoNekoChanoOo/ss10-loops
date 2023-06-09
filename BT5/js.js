let htmlPoint = Number(prompt("Nhập vào điểm HTML: "));
let cssPoint = Number(prompt("Nhập vào điểm CSS: "));
let jsPoint = Number(prompt("Nhập vào điểm JS: "));

let Average = (htmlPoint + cssPoint + jsPoint ) /3;

if(Average < 5){
    document.write("Học viên xếp loại Kém");
} else if(Average >=5 && Average <6 ) {
    document.write("Học viên xếp loại Yếu");
} else if(Average >=6 && Average <7 ) {
    document.write("Học viên xếp loại Trung bình");
} else if(Average >=7 && Average <8 ) {
    document.write("Học viên xếp loại Khá");
} else if(Average >=8 && Average <9 ) {
    document.write("Học viên xếp loại Giỏi");
} else{
    document.write("Học viên xếp loại Xuất sắc");
}
