// Active Navigation Link Detection
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update active navigation link
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100; // Offset for fixed header
        
        let currentSection = '';
        
        // Find which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update navigation links
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('data-section');
            
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to current section link
            if (linkSection === currentSection) {
                link.classList.add('active');
            }
        });
        
        // Special case: if at the very top, activate home
        if (window.scrollY < 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-link[data-section="home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', onScroll);
    
    // Set initial active state
    updateActiveNav();
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                const headerHeight = 72; // Fixed header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Immediately update active state
                setTimeout(() => {
                    updateActiveNav();
                }, 100);
            }
        });
    });
});