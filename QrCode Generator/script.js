let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qr-text");


function generateQR(){
  if(qrTxt.value.length > 0){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;
    imgBox.classList.add("show-img")
  }else{
    qrTxt.classList.add('error');
    setTimeout(() => {
        qrTxt.classList.remove('error');
    },1000);
  }
}