const spin = document.querySelector(".spin");
const result = document.querySelector(".result");
const randomMoney = [5,5,5,5,5,5,5,5,4,4,4,4,4,4,3,3,3,3,3,2,2,2,2,1,1,0];
const moneyUrl = [
    "https://baoxaydung.com.vn/stores/news_dataimages/vananh/072016/06/10/100838baoxaydung_image003.jpg",//200
    "https://www.sbv.gov.vn/webcenter/cs/groups/cucphathanhkhoquy/documents/noidungtinh/c2j2/mdcy/~edisp/~export/SBVWEBAPP01SBV072320~3/338348-04.jpg",//100
    "https://vnn-imgs-a1.vgcloud.vn/photo-cms-kienthuc.zadn.vn/zoomh/800/uploaded/nguyenvan/2021_07_01/5/bi-mat-it-biet-tren-nhung-to-tien-viet-dang-luu-hanh-Hinh-3.jpg",//50
    "https://vnn-imgs-a1.vgcloud.vn/photo-cms-kienthuc.zadn.vn/zoomh/800/uploaded/nguyenvan/2021_07_01/5/bi-mat-it-biet-tren-nhung-to-tien-viet-dang-luu-hanh-Hinh-4.jpg",//20
    "https://gonatour.vn/vnt_upload/news/05_2020/tien_10000_dong_viet_nam.jpg", //10
    "https://upload.wikimedia.org/wikipedia/vi/7/7c/%C4%90%E1%BB%93ng_b%E1%BA%A1c_5000_%C4%91%E1%BB%93ng.jpg",//5
    "https://www.sbv.gov.vn/webcenter/cs/groups/cucphathanhkhoquy/documents/noidungtinh/c2j2/mdcy/~edisp/~export/SBVWEBAPP01SBV072320~3/338348.jpg"//500
] 
let checkClick = false;
let interval = 0;
spin.addEventListener("click",()=>{
    checkClick = !checkClick;
    if(checkClick){
        spin.innerHTML = "Dừng";
        interval = setInterval(()=>{
            let index = Math.floor(Math.random()*6)+1;
            result.src = moneyUrl[index];
        },100)
    }
    else{
        spin.innerHTML = "Quay nhận lì xì";
        clearInterval(interval)
        let index = Math.floor(Math.random()*24)+1;
        result.src = moneyUrl[randomMoney[index]];
    }
})