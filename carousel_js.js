
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   var playButton = document.getElementById("play");
//   var stopButton = document.getElementById("stop");
//   var slideInterval;

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
// var captionText = document.getElementById("caption");
var dots = document.getElementsByClassName("demo");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var slideInterval;

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
    slideInterval = setTimeout(showSlides, 2000);
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
        // captionText.innerHTML = dots[slideIndex-1].alt;
        }
        
        function playSlide() {
        slideInterval = setTimeout(showSlides,2000);
        // playButton.style.display = "none";
        // stopButton.style.display = "block";
        }
        
        function stopSlide() {
        clearTimeout(slideInterval);
        // stopButton.style.display = "none";
        // playButton.style.display = "block";
        }
        
        // Set default style of images to "none"
        for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        
        // Show the first image
        slides[0].style.display = "block";
        dots[0].className += " active";