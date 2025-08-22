// Parallax scrolling effect for hero video
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-section video');
    const heroSection = document.querySelector('.hero-section');
    
    if (!heroVideo || !heroSection) {
        return;
    }
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when hero section is visible
        if (scrollTop < heroHeight + windowHeight) {
            // Calculate parallax offset (negative value moves video up slower than scroll)
            const parallaxSpeed = 0.5; // Adjust this value to control parallax intensity (0.5 = half speed)
            const yPos = scrollTop * parallaxSpeed;
            
            // Apply transform with hardware acceleration
            heroVideo.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Throttled scroll event for better performance
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    
    // Initial call
    updateParallax();
});