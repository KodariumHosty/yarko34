// Список твоих 9 фото — замени на свои пути
const photos = [
    'mamka/photoMark/1.webp',
    'mamka/photoMark/2.webp',
    'mamka/photoMark/3.webp',
    'mamka/photoMark/4.webp',
    'mamka/photoMark/5.webp',
    'mamka/photoMark/6.webp',
    'mamka/photoMark/7.webp',
    'mamka/photoMark/8.webp',
    'mamka/photoMark/9.webp'
];

let current = 0;

const mainImg  = document.getElementById('mainImg');
const thumbsEl = document.getElementById('thumbs');
const fullscreen = document.getElementById('fullscreen');
const fullImg  = document.getElementById('fullImg');

// Строим миниатюры
photos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => setCurrent(i);
    thumbsEl.appendChild(img);
});
const thumbImgs = thumbsEl.querySelectorAll('img');

// Установить текущее фото
function setCurrent(i) {
    current = (i + photos.length) % photos.length; // зацикливание
    mainImg.src = photos[current];
    thumbImgs.forEach((t, idx) => t.classList.toggle('active', idx === current));
    // Прокрутить миниатюру в зону видимости
    const t = thumbImgs[current];
        thumbsEl.scrollTo({
        left: t.offsetLeft - (thumbsEl.clientWidth - t.clientWidth) / 2,
        behavior: 'smooth'
    });

}

// Стрелки
document.getElementById('prev').onclick = () => setCurrent(current - 1);
document.getElementById('next').onclick = () => setCurrent(current + 1);

// Клик по большой картинке — полноэкран
mainImg.onclick = () => {
    fullImg.src = photos[current];
    fullscreen.classList.add('show');
  };
fullscreen.onclick = () => fullscreen.classList.remove('show');

// Клавиатура (бонус)
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  setCurrent(current - 1);
    if (e.key === 'ArrowRight') setCurrent(current + 1);
    if (e.key === 'Escape')     fullscreen.classList.remove('show');
});

// Старт
setCurrent(0);