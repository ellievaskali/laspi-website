var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var slideInterval;
var slideSpeed = 2000; // default speed

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    var speed = document.getElementById("speedSelect").value;
    slideInterval = setTimeout(showSlides, speed);
  }

function prevSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex--;
    if (slideIndex < 1) { slideIndex = slides.length }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function nextSlide() {
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = index;
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



function playSlide() {
    clearTimeout(slideInterval);
    var speed = document.getElementById("speedSelect").value;
    slideInterval = setTimeout(showSlides, speed);
  }



function stopSlide() {
    clearTimeout(slideInterval);
  }

function changeSpeed(speed) {
    slideSpeed = speed;
    stopSlide();
    playSlide();
}

// Set default style of images to "none"
for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// Show the first image
slides[0].style.display = "block";
dots[0].className += " active";

playSlide();