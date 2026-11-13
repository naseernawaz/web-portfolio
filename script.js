// Code Animation Script
const codeParticles = [
    '&lt;div&gt;',
    '{ coding }',
    'function()',
    'document.querySelector()',
    '&lt;p&gt;',
    'class="active"',
    '&lt;section&gt;',
    'const hero = true',
    '#header',
    'console.log()',
    'npm start',
    'git commit',
    'async await',
    'flexbox',
    'grid-area',
    'backgroundColor',
    'return ()',
    'export default',
    'margin: auto',
    'border-radius',
    '@keyframes',
    'media query',
    'let count = 0',
    'useEffect()',
    'try { } catch',
    'JSON.parse()',
    'array.map()',
    'fetch(API)',
    'localhost:3000',
    'const [state]',
    '&& operator',
    '...spread',
    'template literal',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'React',
    'Git',
    'npm',
    'VS Code',
    'Responsive',
    'Mobile First',
    'UI/UX',
    'Web Design',
    'Frontend',
    'Backend',
    'Full Stack'
];

function initCodeAnimation() {
    const animationContainer = document.getElementById('codeAnimation');
    if (!animationContainer) return;

    function createCodeParticle() {
        const particle = document.createElement('div');
        particle.className = 'code-particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';

        // Random text
        const randomText = codeParticles[Math.floor(Math.random() * codeParticles.length)];
        particle.innerHTML = randomText;

        // Random animation delay
        particle.style.animationDelay = Math.random() * -20 + 's';

        // Random size
        const size = 12 + Math.random() * 8;
        particle.style.fontSize = size + 'px';

        // Random color variation
        const hue = 175 + Math.random() * 20; // Cyan range
        const lightness = 60 + Math.random() * 15;
        particle.style.color = `hsl(${hue}, 100%, ${lightness}%)`;

        // Random animation duration
        const duration = 15 + Math.random() * 10;
        particle.style.animationDuration = duration + 's';

        animationContainer.appendChild(particle);

        // Remove after animation completes
        setTimeout(() => {
            if (particle.parentNode === animationContainer) {
                particle.remove();
            }
        }, duration * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createCodeParticle();
        }, i * 300);
    }

    // Continue creating particles
    setInterval(createCodeParticle, 600);
}

// Initialize code animation when page loads
document.addEventListener('DOMContentLoaded', function () {
    initCodeAnimation();

    const typedRole = document.getElementById('typedRole');
    if (typedRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const roles = ['Web Developer', 'CIT Student', 'Problem Solver'];
        const typingDelay = 100;
        const deletingDelay = 50;
        const rolePause = 2000;
        let roleIndex = 0;
        let roleLength = roles[0].length;
        let deleting = false;

        const updateRole = function () {
            const role = roles[roleIndex];
            roleLength += deleting ? -1 : 1;
            typedRole.textContent = role.slice(0, roleLength);

            let delay = deleting ? deletingDelay : typingDelay;
            if (!deleting && roleLength === role.length) {
                deleting = true;
                delay = rolePause;
            } else if (deleting && roleLength === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 200;
            }

            window.setTimeout(updateRole, delay);
        };

        window.setTimeout(function () {
            deleting = true;
            updateRole();
        }, rolePause);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const updateNavbarOnScroll = function () {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 100);
        }
    };
    updateNavbarOnScroll();
    window.addEventListener('scroll', updateNavbarOnScroll);

    // Animate progress bars on scroll
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';

            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1.5s ease-in-out';
            }, 300);
        });
    };

    // Intersection Observer for skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }
});

// Window resize handler
window.addEventListener('resize', function () {
    const particles = document.querySelectorAll('.code-particle');
    particles.forEach(particle => particle.remove());

    // Reinitialize animation after resize
    setTimeout(initCodeAnimation, 500);
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    document.body.classList.remove('light-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');

            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }
});
