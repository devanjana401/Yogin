const dots = document.querySelectorAll('.dot');
const testimonials = document.querySelector('.testimonials');
const visibleCount = 3;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        let move = index * (100 / visibleCount);    //calculate how far to move the slides
        testimonials.style.transform = `translateX(-${move}%)`;
    });
});