document.addEventListener('DOMContentLoaded', function () {
    // Configuration variables
    const sliderConfig = {
        autoPlayInterval: 5000, // Time between auto slides in milliseconds
        transitionSpeed: 2000,   // Transition speed in milliseconds - time take to finish animation
        slidesData: [
            {
                id: 1,
                image: '../images/slider-car-1.png',
                number: '001'
            },
            {
                id: 2,
                image: '../images/slider-car-2.png',
                number: '002'
            },
            {
                id: 3,
                image: '../images/slider-car-3.png',
                number: '003'
            },
            {
                id: 4,
                image: '../images/slider-car-4.png',
                number: '004'
            },
            {
                id: 5,
                image: '../images/slider-car-5.png',
                number: '005'
            },
            {
                id: 6,
                image: '../images/slider-car-6.png',
                number: '006'
            },
        ]
    };

    // DOM Elements
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderContainer = document.querySelector('.slider-container');

    // State variables
    let currentSlide = 0;
    let autoPlayTimer;
    let isTransitioning = false;
    let isPaused = false;

    // Initialize the slider
    function initSlider() {
        // Create slides
        sliderConfig.slidesData.forEach(slide => {
            const slideElement = document.createElement('div');
            slideElement.className = 'slide';

            const slideContent = document.createElement('div');
            slideContent.className = 'slide-content';

            const carImage = document.createElement('img');
            carImage.className = 'car-image';
            carImage.src = slide.image;
            carImage.alt = `Gulf Car ${slide.id}`;

            slideContent.appendChild(carImage);
            slideElement.appendChild(slideContent);
            sliderTrack.appendChild(slideElement);
        });

        // Set initial slide
        updateSlide();
        startAutoPlay();

        // Add event listeners
        prevBtn.addEventListener('click', goToPrevSlide)
        nextBtn.addEventListener('click', goToNextSlide);

        // Pause on hover
        sliderContainer.addEventListener('mouseenter', pauseAutoPlay);
        sliderContainer.addEventListener('mouseleave', resumeAutoPlay);
    }

    // Go to specific slide
    function goToSlide(index) {
        if (isTransitioning) return;

        isTransitioning = true;
        currentSlide = index;

        updateSlide();

        // Reset auto play timer if not paused
        if (!isPaused) {
            resetAutoPlay();
        }

        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, sliderConfig.transitionSpeed);
    }

    // Go to the previous slide
    function goToPrevSlide() {
        if (currentSlide === 0) {
            return;
        }
        const prevIndex = currentSlide - 1;
        goToSlide(prevIndex);
    }

    // Go to the next slide
    function goToNextSlide() {
        if (currentSlide === sliderConfig.slidesData.length - 1) {
            return;
        }
        const nextIndex = currentSlide + 1;
        goToSlide(nextIndex);
    }

    // Update the slider display
    function updateSlide() {
        // Update transform of slider track
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Start auto play
    function startAutoPlay() {
        autoPlayTimer = setInterval(goToNextSlide, sliderConfig.autoPlayInterval);
    }

    // Reset auto play timer
    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // Pause auto play
    function pauseAutoPlay() {
        isPaused = true;
        clearInterval(autoPlayTimer);
    }

    // Resume auto play
    function resumeAutoPlay() {
        isPaused = false;
        startAutoPlay();
    }

    // Initialize everything
    initSlider();
}); 