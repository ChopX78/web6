const sliderLine = document.querySelector('.sliderLine')
const btnLeft = document.querySelector('.leftPart>.arrow')
const  btnRight = document.querySelector('.rightPart>.arrow')
let offset = 0
btnLeft.addEventListener('click', sLeft)
btnRight.addEventListener('click', sRight)
let lastClickTime = 0;
let autoSlideInterval;
function sLeft() {
    let currentTime = new Date().getTime();
    if (currentTime - lastClickTime > 2000) {
        stopAutoSlide();
        if (offset === 0) {
            sliderLine.style.transition = 'none';
            offset = 651 * 4;
            sliderLine.style.left = -offset + 'px';
            setTimeout(function () {
                sliderLine.style.transition = 'all 2s ease';
                offset = offset - 651;
                sliderLine.style.left = -offset + 'px';
            }, 0);
        } else {
            sliderLine.style.transition = 'all 2s ease';
            offset = offset - 651;
            sliderLine.style.left = -offset + 'px';
        }
        lastClickTime = currentTime;
    }
}
function sRight() {
    let currentTime = new Date().getTime();
    if (currentTime - lastClickTime > 2000) {
        stopAutoSlide();
        if (offset === 651 * 4) {
            sliderLine.style.transition = 'none';
            offset = 0;
            sliderLine.style.left = -offset + 'px';
            setTimeout(function () {
                sliderLine.style.transition = 'all 2s ease';
                offset = offset + 651;
                sliderLine.style.left = -offset + 'px';
            }, 0);
        } else {
            sliderLine.style.transition = 'all 2s ease';
            offset = offset + 651;
            sliderLine.style.left = -offset + 'px';
        }
        lastClickTime = currentTime;
    }
}
function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        sRight()
    }, 5000)
}
function stopAutoSlide() {
    clearInterval(autoSlideInterval)
}
startAutoSlide();
document.addEventListener('click', function () {
    sRight()
    stopAutoSlide()
    setTimeout(startAutoSlide, 5000)
});
document.addEventListener('click', function () {
    sLeft()
    stopAutoSlide()
    setTimeout(startAutoSlide, 5000)
});