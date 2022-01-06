// tạo biến lưu ảnh.
let imgObj= null;
// tạo function để khởi tạo imgObj.
function init(){
    imgObj = document.getElementById("myImage");
    imgObj.style.position = "relative";
    imgObj.style.left = "0px";
}
// tạo function để tăng khoảng cách sang phải.
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
//tạo function để tăng khoảng cách sang trái.
function moveLeft(){
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}
// gọi hàm init khi trình duyệt được tải lần đầu.
window.onload = init()

