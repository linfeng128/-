const images = document.querySelectorAll('.carousel-img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;
let timer = null;

function showImage(idx) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
    });
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
    resetTimer();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    resetTimer();
}

function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextImage, 10000);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// 初始化显示第一张
showImage(current);
resetTimer(); 