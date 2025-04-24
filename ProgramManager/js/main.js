// Слайдер изображений
function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentIndex = 0;
    
    // Создаем индикаторы
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Функция перехода к слайду
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        // Обновляем активные классы
        slides[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // Обработчики кнопок
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Автопрокрутка (опционально)
    let slideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    
    // Пауза при наведении
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    });
    
    // Переключение по клавиатуре
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initSlider);

document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация карточек при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .format-column').forEach(card => {
        observer.observe(card);
    });

    // Обработка скачивания программы
    document.querySelector('.primary-btn.large-btn').addEventListener('click', function(e) {
        e.preventDefault();

        const fileUrl = 'download/ProgramManager.rar';
    
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'ProgramManager.rar';
    
        // Добавляем обработчики
        link.onload = function() {
          document.body.removeChild(link);
        };
    
        link.onerror = function() {
            document.body.removeChild(link);
            alert('Ошибка скачивания. Пожалуйста, попробуйте позже.');
        };

        document.body.appendChild(link);
        link.click();
    });
});