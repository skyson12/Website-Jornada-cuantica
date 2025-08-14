// Quantum Event Website - Main JavaScript File

(function() {
    'use strict';

    // Initialize all components when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initParticles();
        initCountdown();
        initScrollAnimations();
        initSmoothScrolling();
    });

    // Navigation functionality
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Handle navbar scroll effect
        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        }

        // Close mobile menu when clicking on a link
        function closeMobileMenu() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }

        // Highlight active nav link based on scroll position
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        // Event listeners
        window.addEventListener('scroll', function() {
            handleScroll();
            updateActiveNavLink();
        });

        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Particle animation system
    function initParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 100;
        const particles = [];

        class Particle {
            constructor() {
                this.element = document.createElement('div');
                this.element.className = 'particle';
                this.reset();
                particlesContainer.appendChild(this.element);
            }

            reset() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                
                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
                this.element.style.opacity = this.opacity;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > window.innerWidth || 
                    this.y < 0 || this.y > window.innerHeight) {
                    this.reset();
                } else {
                    this.element.style.left = this.x + 'px';
                    this.element.style.top = this.y + 'px';
                }
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animateParticles() {
            particles.forEach(particle => particle.update());
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        // Handle window resize
        window.addEventListener('resize', function() {
            particles.forEach(particle => particle.reset());
        });
    }

    // Countdown timer functionality
    function initCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Target date: September 15, 2025
        const targetDate = new Date('2025-09-15T09:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                // Event has started
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Add leading zeros and update display
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');

            // Add animation effect
            if (secondsElement.textContent === '00') {
                [daysElement, hoursElement, minutesElement, secondsElement].forEach(el => {
                    el.style.transform = 'scale(1.1)';
                    setTimeout(() => el.style.transform = 'scale(1)', 200);
                });
            }
        }

        // Update countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Scroll animations using AOS
    function initScrollAnimations() {
        // Initialize AOS (Animate On Scroll) library
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100,
                disable: function() {
                    // Disable animations on mobile devices with reduced motion preference
                    return window.innerWidth < 768 && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                }
            });
        }

        // Custom scroll animations for elements without AOS
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that need scroll animation
        const animatedElements = document.querySelectorAll('.agenda-card, .speaker-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Utility functions
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization
    const optimizedScrollHandler = throttle(function() {
        // Handle scroll-based animations here if needed
    }, 16); // 60fps

    window.addEventListener('scroll', optimizedScrollHandler);

    // Handle window resize
    const optimizedResizeHandler = debounce(function() {
        // Recalculate layouts if needed
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250);

    window.addEventListener('resize', optimizedResizeHandler);

    // Preload critical images
    function preloadImages() {
        const criticalImages = [
            'assets/images/hero.webp',
            'assets/images/speaker-1.jpg',
            'assets/images/speaker-2.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Initialize image preloading
    preloadImages();

    // Handle service worker registration for PWA functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Service worker could be registered here for PWA functionality
            // navigator.serviceWorker.register('/service-worker.js');
        });
    }

    // Analytics and tracking (placeholder)
    function trackEvent(eventName, eventData) {
        // Google Analytics or other tracking service integration
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }

    // Track form submissions
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'registrationForm') {
            trackEvent('form_submit', {
                form_name: 'registration'
            });
        }
    });

})();