// Services Carousel Functionality with Single Card Sliding
document.addEventListener('DOMContentLoaded', function() {
    const servicesTrack = document.getElementById('services-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    const totalCards = 6;
    const visibleCards = 3;
    const maxIndex = totalCards - visibleCards; // 3 (positions: 0,1,2,3)

    function updateCarousel() {
        // Calculate card width including gap: (100% - 48px) / 3 + 24px gap
        const cardWidth = `calc((100% - 48px) / 3 + 24px)`;
        // For sliding, we need to move by one card width + gap
        servicesTrack.style.transform = `translateX(calc(-${currentIndex} * (${cardWidth})))`;
    }

    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        // Add visual feedback for disabled buttons
        if (prevBtn.disabled) {
            prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
        
        if (nextBtn.disabled) {
            nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex && !nextBtn.disabled) {
            // Disable buttons during transition
            nextBtn.disabled = true;
            prevBtn.disabled = true;
            
            currentIndex++;
            updateCarousel();
            
            // Re-enable buttons after transition
            setTimeout(() => {
                updateButtonStates();
            }, 500); // Match CSS transition duration
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0 && !prevBtn.disabled) {
            // Disable buttons during transition
            nextBtn.disabled = true;
            prevBtn.disabled = true;
            
            currentIndex--;
            updateCarousel();
            
            // Re-enable buttons after transition
            setTimeout(() => {
                updateButtonStates();
            }, 500); // Match CSS transition duration
        }
    });

    // Initialize carousel
    updateCarousel();
    updateButtonStates();
});