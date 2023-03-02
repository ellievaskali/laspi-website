// about list
const subcategoriesAbout = document.querySelectorAll(".column h3");
const hiddenDivsAbout = document.querySelectorAll(".hidden-about");

let currentVisibleDivAbout = null;

// Show random div on page load
window.onload = function() {
  let randomIndex = Math.floor(Math.random() * hiddenDivsAbout.length);
  hiddenDivsAbout[randomIndex].style.display = "flex";
  currentVisibleDivAbout = hiddenDivsAbout[randomIndex];
}

// Show selected div and hide all others on hover
for (let i = 0; i < subcategoriesAbout.length; i++) {
    subcategoriesAbout[i].addEventListener("mouseover", function() {
        currentVisibleDivAbout.style.display = "none";
        hiddenDivsAbout[i].style.display = "flex";
        currentVisibleDivAbout = hiddenDivsAbout[i];
    });
    };


// gsap
// gsap.registerPlugin(InertiaPlugin);
Draggable.create("img", {type:"x,y", edgeResistance:1, bounds:".preview2"});