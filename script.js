'use strict';

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
});

// JavaScript-Code fürs Login
const dashboard = document.querySelector('.dashboard');
const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    dashboard.style.opacity = 100;
    slideshow.style.height = 0;
    nextButton.style.display = 'none';


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

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

// Dashboard JavaScript-Code
// Dashboard JavaScript-Code
// Dashboard JavaScript-Code
// Dashboard JavaScript-Code
// Dashboard JavaScript-Code

//Data
const professor1 = {
    studyProgram: 'Informatik',
    firstName: 'Sorgenfrei',
    lastName: 'Max',
    email: 'mm@mm',
    classes: { className: '', semester: '', startDate: '', endDate: '' },
    password: 1111,
    classPlan: '',
}

const professor2 = {
    studyProgram: 'Informatik',
    firstName: 'Ohnesorge',
    lastName: 'Anna',
    email: 'am@am',
    classes: { className: '', semester: '', startDate: '', endDate: '' },
    password: 2222,
    classPlan: '',
}

const professor3 = {
    studyProgram: 'Informatik',
    firstName: 'Hassdenteufel',
    lastName: 'Felix',
    email: 'mm@mm',
    classes: { className: '', semester: '', startDate: '', endDate: '' },
    password: 3333,
    classPlan: '',
}

const professor4 = {
    studyProgram: 'Informatik',
    firstName: 'Liebhaber',
    lastName: 'Nina',
    email: 'mm@mm',
    classes: { className: '', semester: '', startDate: '', endDate: '' },
    password: 4444,
    classPlan: '',
}


// Array Initializierung
const professors = [];

// Elements und Liste Aktivierung
const professorForm = document.getElementById('professorForm');
const professorList = document.getElementById('professorList');

// Event handler for form submission
professorForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from form fields
    const studyProgram = document.getElementById('studyProgram').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const classes = document.getElementById('classes').value;
    const classPlan = document.getElementById('classPlan').value;

    // Create a professor object
    const professor = {
        studyProgram,
        firstName,
        lastName,
        email,
        classes,
        classPlan,
    };

    // Add the professor to the array
    professors.push(professor);

    // Add the professor to the displayed list
    const listItem = document.createElement('li');
    listItem.textContent = `${professor.firstName} ${professor.lastName}`;
    professorList.appendChild(listItem);

    // Clear the form fields
    professorForm.reset();
});








