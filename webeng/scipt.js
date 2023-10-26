let cycleInterval;

document.addEventListener('DOMContentLoaded', function () {
    // JavaScript-Code, um die Liste der Dozenten zu füllen
    const professorsList = document.getElementById('professors-list');
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', () => {
        const searchValue = searchBar.value.toLowerCase();
        const professors = professorsList.getElementsByTagName('li');
        
        for (let i = 1; i < professors.length; i++) {
            const professor = professors[i];
            const professorName = professor.textContent.toLowerCase();
            
            if (professorName.includes(searchValue)) {
                professor.style.display = 'block';
            } else {
                professor.style.display = 'none';
            }
        }
        
        if (searchValue === "") {
            professorsList.style.display = 'none';
        } else {
            professorsList.style.display = 'block';
        }
    });
    
    

    


    // JavaScript-Code, um die Slideshow zu steuern
    const slideshow = document.querySelector(".slideshow");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    let currentIndex = 0;

    cycleInterval = setInterval(autoCycle, 4000);

    function autoCycle() {
        showSlide(currentIndex + 1);
    }

    function showSlide(index) {
        slides[currentIndex].classList.remove("active", "animate-in", "animate-out");

        let prevIndex = currentIndex; // Speichere den Index des vorherigen Bildes
        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add("active", "animate-in");
        slides[prevIndex].classList.add("animate-out");

        setTimeout(function () {
            slides[currentIndex].classList.remove("animate-in");
            slides[prevIndex].classList.remove("animate-out");
            nextButton.disabled = false;
        }, 1000);
    }

    /*prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
        prevButton.disabled = true;
        clearInterval(cycleInterval);
        cycleInterval = setInterval(autoCycle, 4000);
    });*/

    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
        nextButton.disabled = true;
        clearInterval(cycleInterval);
        cycleInterval = setInterval(autoCycle, 4000);
    });

    slides[currentIndex].classList.add("active", "animate-in"); //starte mit erster Folie
});