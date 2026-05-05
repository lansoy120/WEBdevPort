document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for all internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 2. Intersection Observer for Fade-in Reveal Effects
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing after it has been revealed once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        // Initial styles for the fade-up effect
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        // Define the visible state class
        const style = document.createElement('style');
        style.innerHTML = `
            .section.is-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
        
        observer.observe(section);
    });

    // 3. Form Submission Handling (Preventing reload for a cleaner experience)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.send-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'MESSAGE SENT!';
            btn.style.background = '#222';
            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'var(--accent)';
            }, 3000);
        });
    }
});