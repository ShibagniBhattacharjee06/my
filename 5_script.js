
    function changeAboutMeText() {
        const aboutMeTexts = ["Tech Enthusiast", "Emerging Technologist", "Continuous Learner"];
        const typingSpeed = 100;
        const eraseSpeed = 50;
        const pauseTime = 1500;
        const aboutMeElement = document.querySelector('.about-me');

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = aboutMeTexts[textIndex];
            if (!isDeleting && charIndex < currentText.length) {
                aboutMeElement.textContent += currentText[charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } else if (isDeleting && charIndex > 0) {
                aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, eraseSpeed);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    textIndex = (textIndex + 1) % aboutMeTexts.length;
                }
                setTimeout(type, pauseTime);
            }
        }

        type();
    }

    document.addEventListener('DOMContentLoaded', function () {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const icon = darkModeToggle.querySelector('i');

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    });

    changeAboutMeText();
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.setProperty('--progress', `${progress}%`);
                    progressBar.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        });
    
        const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
        programmingLanguages.forEach(skill => {
            observer.observe(skill);
        });
    });
    
