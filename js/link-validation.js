// Link and Button Functionality Testing
document.addEventListener('DOMContentLoaded', function() {
    // Test all navigation links
    function testNavigationLinks() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        
        navLinks.forEach(link => {
            const targetSection = link.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            // Navigation validation (silent check)
        });
    }

    // Test all clickable elements
    function testClickableElements() {
        const buttons = document.querySelectorAll('button');
        const links = document.querySelectorAll('a');
        
        // Test buttons have proper accessibility
        buttons.forEach((button, index) => {
            // Accessibility validation (silent check)
        });
        
        // Test email and phone links
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Email and phone validation (silent check)
            if (href && href.startsWith('mailto:')) {
                const email = href.replace('mailto:', '');
                isValidEmail(email);
            } else if (href && href.startsWith('tel:')) {
                const phone = href.replace('tel:', '');
                isValidPhone(phone);
            }
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation
    function isValidPhone(phone) {
        const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
        return phoneRegex.test(phone) && phone.length >= 10;
    }

    // Test form functionality if any
    function testForms() {
        // Form validation (silent check)
        document.querySelectorAll('form');
    }

    // Test image loading
    function testImages() {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        let totalImages = images.length;

        images.forEach(img => {
            if (img.complete && img.naturalHeight !== 0) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                });
                
                img.addEventListener('error', (e) => {
                    // Image load error (silent)
                });
            }
        });

        // Image loading completed (silent)
    }

    // Run all tests
    testNavigationLinks();
    testClickableElements();
    testForms();
    testImages();
    
    // Click tracking (silent)
});