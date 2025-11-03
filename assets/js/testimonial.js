const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelector('.testimonials');
const visibleCount = 3;
const total = document.querySelectorAll('.testimonial').length;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        let move = index * (100 / visibleCount);
        testimonials.style.transform = `translateX(-${move}%)`;
    });
});