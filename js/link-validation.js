// Link and Button Functionality Testing
document.addEventListener('DOMContentLoaded', function() {
    // Test all navigation links
    function testNavigationLinks() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        
        navLinks.forEach(link => {
            const targetSection = link.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (!targetElement) {
                console.error(`Navigation link target not found: ${targetSection}`);
            }
        });
    }

    // Test all clickable elements
    function testClickableElements() {
        const buttons = document.querySelectorAll('button');
        const links = document.querySelectorAll('a');
        
        // Test buttons have proper accessibility
        buttons.forEach((button, index) => {
            if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
                console.warn(`Button ${index} missing accessible text or aria-label`);
            }
        });
        
        // Test email and phone links
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('mailto:')) {
                const email = href.replace('mailto:', '');
                if (!isValidEmail(email)) {
                    console.error(`Invalid email address: ${email}`);
                }
            } else if (href && href.startsWith('tel:')) {
                const phone = href.replace('tel:', '');
                if (!isValidPhone(phone)) {
                    console.error(`Invalid phone number: ${phone}`);
                }
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
        const forms = document.querySelectorAll('form');
        forms.forEach((form, index) => {
            console.log(`Form ${index} found - implementing validation if needed`);
        });
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
                    if (loadedImages === totalImages) {
                        console.log('All images loaded successfully');
                    }
                });
                
                img.addEventListener('error', (e) => {
                    console.error(`Failed to load image: ${e.target.src}`);
                });
            }
        });

        if (loadedImages === totalImages) {
            console.log('All images loaded successfully');
        }
    }

    // Run all tests
    testNavigationLinks();
    testClickableElements();
    testForms();
    testImages();
    
    // Add click tracking for analytics
    document.addEventListener('click', function(e) {
        if (e.target.matches('button') || e.target.matches('a')) {
            console.log(`Clicked element: ${e.target.tagName} - ${e.target.textContent.trim() || e.target.getAttribute('aria-label')}`);
        }
    });
});