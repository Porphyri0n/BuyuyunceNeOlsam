// Kariyer Rehberi AI - Landing Page Scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Toggle menu button appearance
        const spans = this.querySelectorAll('span');
        if (nav.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    }
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          document.body.classList.remove('menu-open');
          
          // Reset menu button appearance
          const spans = mobileMenuBtn.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    });
    
    // Scroll Animation for Features & Testimonials
    const featureCards = document.querySelectorAll('.feature-card, .testimonial-card');
    const animateOnScroll = function() {
      featureCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    };
    
    // Set initial state for feature and testimonial cards
    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      floatingElements.forEach(element => {
        const speed = 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for sticky header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add intersection observer for section animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach(section => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });
    
    // Add CSS for section animations
    const style = document.createElement('style');
    style.textContent = `
      .section-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .in-view {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
    
    // Add hover effect to the main image
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
      mainImage.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = x / rect.width - 0.5;
        const yPercent = y / rect.height - 0.5;
        
        const rotateX = yPercent * -10; // Reverse direction for natural feel
        const rotateY = xPercent * 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      mainImage.addEventListener('mouseleave', function() {
        this.style.transform = `perspective(1000px) rotateY(-5deg)`;
      });
    }

    // Animate stats counters when in view
    const statsSection = document.querySelector('.stats');
    const counters = document.querySelectorAll('.count');
    if (statsSection && counters.length) {
      const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(counter => {
              const target = parseInt(counter.dataset.target, 10);
              let current = 0;
              const step = Math.max(1, Math.floor(target / 100));
              const update = () => {
                current += step;
                if (current >= target) {
                  counter.textContent = target;
                } else {
                  counter.textContent = current;
                  requestAnimationFrame(update);
                }
              };
              requestAnimationFrame(update);
            });
            counterObserver.unobserve(statsSection);
          }
        });
      }, { threshold: 0.4 });
      counterObserver.observe(statsSection);
    }
    
    // Add year to copyright in footer
    const yearSpan = document.querySelector('.footer-bottom .year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });