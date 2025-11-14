const counters = document.querySelectorAll('.count');
        let started = false; 

        function startCounting() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');   // + --> convert string to number
                const duration = 1000; 
                const step = target / (duration / 30);
                let count = 0;

                const updateCount = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(updateCount);
                    }
                    counter.textContent = target === 4.5 ? count.toFixed(1) : Math.floor(count);
                }, 50);
            });
        }

        window.addEventListener('scroll', () => {
            const section = document.querySelector('.success-metrics');
            const sectionTop = section.getBoundingClientRect().top;      //measures how far the section is from the top of the screen
            if (sectionTop < window.innerHeight - 100 && !started) {
                startCounting();
                started = true;
            }
        });
        