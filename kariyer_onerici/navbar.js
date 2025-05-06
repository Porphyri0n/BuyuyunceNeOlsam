// Kariyer Rehberi AI - Navbar JavaScript
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
  });