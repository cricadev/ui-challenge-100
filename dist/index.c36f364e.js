const img = document.querySelector(".img");
const arrImg = [
    './img/mobile-01.png',
    './img/mobile-02.png',
    './img/mobile-03.png'
];
setInterval(function() {
    let random = Math.floor(Math.random() * arrImg.length);
    img.src = arrImg[random];
}, 1000);

//# sourceMappingURL=index.c36f364e.js.map
