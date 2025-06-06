// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
        
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
        
// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
        
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
                
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
        
// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
            
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
                
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}
        
window.addEventListener('scroll', animateOnScroll);
// Initial check on page load
window.addEventListener('load', animateOnScroll);
        
// Set current year in footer
document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} Program Manager. Все права защищены.`;