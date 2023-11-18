const sliderLine = document.querySelector('.sliderLine');
const btnLeft = document.querySelector('.leftPart > .arrow');
const btnRight = document.querySelector('.rightPart > .arrow');
let offset = 0;
let lastClickTime = 0;
let autoSlideInterval;

btnLeft.addEventListener('click', sLeft);
btnRight.addEventListener('click', sRight);

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
        startAutoSlide();
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
        startAutoSlide();
    }
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(function() {
        sRight();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();
