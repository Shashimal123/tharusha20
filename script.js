
const typedText = document.querySelector(".typed-text");
const phrases = ["Web Development", "Creativity", "UI/UX"]; 
let i = 0; 
let j = 0; 
let isDeleting = false; 

function typeEffect() {
    const currentPhrase = phrases[i]; 

    if (!isDeleting) {
        
        typedText.textContent += currentPhrase[j];
        j++;
    } else {
        
        typedText.textContent = currentPhrase.substring(0, j - 1);
        j--;
    }

    
    if (!isDeleting && j === currentPhrase.length) {
        
        isDeleting = true;
        setTimeout(typeEffect, 1000); 
        return;
    } else if (isDeleting && j === 0) {
        
        isDeleting = false;
        i = (i + 1) % phrases.length; 
    }

    
    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(typeEffect, typingSpeed);
}


typeEffect();


document.querySelector("form").addEventListener("submit", function (event) {
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid = true; 

    
    document.querySelectorAll(".error").forEach(error => error.remove());

   
    if (name.value.trim() === "") {
        showError(name, "Name is required.");
        isValid = false;
    }

    
    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email address.");
        isValid = false;
    }

   
    if (message.value.trim().length < 10) {
        showError(message, "Message must be at least 10 characters long.");
        isValid = false;
    }

    
    if (!isValid) {
        event.preventDefault();
    }
});


function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "5px";
    error.textContent = message;
    element.parentElement.appendChild(error);
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


const video = document.getElementById("background-video");


window.addEventListener("DOMContentLoaded", () => {
    video.play();
});


const homeSection = document.getElementById("home");
homeSection.addEventListener("mouseenter", () => {
    if (video.paused) {
        video.play();
    }
});

homeSection.addEventListener("mouseleave", () => {
    if (video.paused) {
        video.play();
    }
});


