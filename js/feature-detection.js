// Feature Detection and Cross-browser Support
document.addEventListener('DOMContentLoaded', function() {
    // WebP detection
    function detectWebP() {
        const webp = new Image();
        webp.onload = webp.onerror = function () {
            const isWebP = webp.height === 2;
            document.documentElement.classList.add(isWebP ? 'webp' : 'no-webp');
        };
        webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    // Detect reduced motion preference
    function respectReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.documentElement.classList.add('reduced-motion');
        }
        
        // Listen for changes
        prefersReducedMotion.addEventListener('change', function(e) {
            if (e.matches) {
                document.documentElement.classList.add('reduced-motion');
            } else {
                document.documentElement.classList.remove('reduced-motion');
            }
        });
    }

    // Performance monitoring for 60fps
    function monitorPerformance() {
        let frameCount = 0;
        let lastTime = performance.now();
        
        function countFPS() {
            frameCount++;
            const now = performance.now();
            
            if (now >= lastTime + 1000) {
                const fps = Math.round((frameCount * 1000) / (now - lastTime));
                
                // Log performance warning if below 50fps
                if (fps < 50) {
                    console.warn(`Performance warning: ${fps} FPS detected`);
                }
                
                frameCount = 0;
                lastTime = now;
            }
            
            requestAnimationFrame(countFPS);
        }
        
        // Start monitoring only if not in reduced motion mode
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            requestAnimationFrame(countFPS);
        }
    }

    // Initialize all feature detections
    detectWebP();
    respectReducedMotion();
    monitorPerformance();

    // Add error handling for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            // Add a fallback class for styling broken images
            this.classList.add('image-error');
        });
    });
});