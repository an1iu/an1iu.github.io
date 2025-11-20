// News Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const newsSlider = document.querySelector('.news-slider');
    if (!newsSlider) return;
    
    const container = newsSlider.querySelector('.news-container');
    const slides = newsSlider.querySelectorAll('.news-slide');
    const prevBtn = newsSlider.querySelector('.news-prev');
    const nextBtn = newsSlider.querySelector('.news-next');
    const indicators = newsSlider.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    
    // Update slider position
    function updateSlider() {
        const translateY = -currentSlide * 100;
        container.style.transform = `translateY(${translateY}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000); // Restart auto-play after 5 seconds
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        });
    });
    
    // Pause auto-play on hover
    newsSlider.addEventListener('mouseenter', stopAutoPlay);
    newsSlider.addEventListener('mouseleave', startAutoPlay);
    
    // Touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    let isSwipe = false;
    
    newsSlider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipe = false;
        stopAutoPlay();
    });
    
    newsSlider.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = startX - currentX;
        const diffY = startY - currentY;
        
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 30) {
            isSwipe = true;
            e.preventDefault();
        }
    });
    
    newsSlider.addEventListener('touchend', (e) => {
        if (!startY || !isSwipe) return;
        
        const endY = e.changedTouches[0].clientY;
        const diffY = startY - endY;
        
        if (Math.abs(diffY) > 50) {
            if (diffY > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        startX = 0;
        startY = 0;
        isSwipe = false;
        setTimeout(startAutoPlay, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!newsSlider.matches(':hover')) return;
        
        if (e.key === 'ArrowUp') {
            prevSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        } else if (e.key === 'ArrowDown') {
            nextSlide();
            stopAutoPlay();
            setTimeout(startAutoPlay, 5000);
        }
    });
    
    // Initialize
    updateSlider();
    startAutoPlay();
});
