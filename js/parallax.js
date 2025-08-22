// Parallax scrolling effect for hero video
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-section video');
    const heroSection = document.querySelector('.hero-section');
    
    if (!heroVideo || !heroSection) {
        return;
    }
    
    // Check if device is mobile or has reduced motion preference
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Disable parallax on mobile devices and for users who prefer reduced motion
    if (isMobile || prefersReducedMotion) {
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
    
    // Handle window resize - disable parallax if window becomes mobile size
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            heroVideo.style.transform = 'none';
            window.removeEventListener('scroll', requestParallaxUpdate);
        }
    });
    
    // Initial call
    updateParallax();
});