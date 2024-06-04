var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(index) {
    slides.forEach(function (slide, i) {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    currentSlide = index;
}

// Автоматическая прокрутка слайдера (например, каждые 5 секунд)
setInterval(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Добавьте кнопки "Вперед" и "Назад" для ручного переключения слайдов
// ...