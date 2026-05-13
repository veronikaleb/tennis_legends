 document.addEventListener('DOMContentLoaded', () => {
    // 1. Скрол-анімація (Scroll Reveal)
    const observerOptions = { threshold: 0.1 };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.player-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
        revealObserver.observe(card);
    });

    // 2. Мобільне меню
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.menu-link');

    if (openBtn && closeBtn && menu) {
        // Відкрити
        openBtn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
        });

        // Закрити (кнопкою або посиланням)
        const closeMenu = () => menu.classList.add('translate-x-full');

        closeBtn.addEventListener('click', closeMenu);
        links.forEach(link => link.addEventListener('click', closeMenu));
    }
    const toTopBtn = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        // Показуємо кнопку
        toTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        toTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
        // Ховаємо кнопку
        toTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        toTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
});

// Плавний скрол вгору при кліку
toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to cards
    document.querySelectorAll('.player-card-70s').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        revealOnScroll.observe(card);
    });
});

// Logic for adding class via observer
const style = document.createElement('style');
style.textContent = `
    .player-card-70s.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
});