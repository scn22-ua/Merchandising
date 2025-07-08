// Función para mostrar mensaje al hacer clic en el botón
function mostrarMensaje() {
    alert('¡Hola! Tu página web en GitHub Pages funciona correctamente 🎉');
}

// Smooth scroll para los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animación de aparición de elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Configurar animaciones iniciales
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar animación al cargar la página
    animateOnScroll();
    
    // Ejecutar animación al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Cambiar color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.backgroundColor = '';
    }
});

// Función para mostrar la fecha actual en el footer
function actualizarFecha() {
    const footer = document.querySelector('footer p');
    const fechaActual = new Date().getFullYear();
    footer.innerHTML = `&copy; ${fechaActual} Mi Sitio Web. Creado con GitHub Pages.`;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarFecha);