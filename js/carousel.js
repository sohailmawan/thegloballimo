// Services Carousel Functionality - Simplified and Reliable
document.addEventListener('DOMContentLoaded', function() {
    const servicesTrack = document.getElementById('services-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const carousel = document.getElementById('services-carousel');
    
    if (!servicesTrack || !prevBtn || !nextBtn) {
        return;
    }
    
    if (servicesTrack.children.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    const totalCards = servicesTrack.children.length;
    let visibleCards = 3; // Default for desktop
    let maxIndex = Math.max(0, totalCards - visibleCards);
    

    function getVisibleCards() {
        const width = window.innerWidth;
        if (width <= 768) {
            return 1; // Mobile: 1 card
        } else if (width <= 1024) {
            return 2; // Tablet: 2 cards
        } else {
            return 3; // Desktop: 3 cards
        }
    }

    function updateCarousel() {
        if (!servicesTrack) return;
        
        visibleCards = getVisibleCards();
        maxIndex = Math.max(0, totalCards - visibleCards);
        
        // Ensure currentIndex is within bounds
        currentIndex = Math.min(currentIndex, maxIndex);
        
        // Get actual card width including gap from first card
        const firstCard = servicesTrack.children[0];
        if (!firstCard) return;
        
        const cardRect = firstCard.getBoundingClientRect();
        const trackRect = servicesTrack.getBoundingClientRect();
        const gap = 24; // 1.5rem = 24px
        
        let moveDistance;
        if (visibleCards === 1) {
            // Mobile: Move by full card width + gap
            moveDistance = cardRect.width + gap;
        } else if (visibleCards === 2) {
            // Tablet: Move by card width + gap
            moveDistance = cardRect.width + gap;
        } else {
            // Desktop: Move by card width + gap
            moveDistance = cardRect.width + gap;
        }
        
        const translateValue = -(currentIndex * moveDistance);
        servicesTrack.style.transform = `translateX(${translateValue}px)`;
        updateButtonStates();
    }

    function updateButtonStates() {
        if (!prevBtn || !nextBtn) return;
        
        // Update disabled states
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        // Visual feedback
        prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
        prevBtn.classList.toggle('cursor-not-allowed', prevBtn.disabled);
        nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
        nextBtn.classList.toggle('cursor-not-allowed', nextBtn.disabled);
        
    }

    function slideNext() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }

    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        slideNext();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        slidePrev();
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel();
        }, 150);
    });

    // Touch swipe functionality for mobile
    let startX = 0;
    let endX = 0;
    const minSwipeDistance = 50;

    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        // Prevent default to avoid scrolling while swiping horizontally
        if (Math.abs(e.touches[0].clientX - startX) > 10) {
            e.preventDefault();
        }
    }

    function handleTouchEnd(e) {
        endX = e.changedTouches[0].clientX;
        const swipeDistance = startX - endX;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe left - go to next
                slideNext();
            } else {
                // Swipe right - go to previous
                slidePrev();
            }
        }
    }

    // Add touch events only on mobile
    if (window.innerWidth <= 768) {
        carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
        carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
        carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Initialize carousel
    updateCarousel();
    
    // Auto-play removed as requested
});