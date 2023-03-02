
// homepage list
const subcategories = document.querySelectorAll(".news-subcategory h3");
const hiddenDivs = document.querySelectorAll(".hidden");

let currentVisibleDiv = null;

// Show random div on page load
window.onload = function() {
  let randomIndex = Math.floor(Math.random() * hiddenDivs.length);
  hiddenDivs[randomIndex].style.display = "flex";
  currentVisibleDiv = hiddenDivs[randomIndex];
}

// Show selected div and hide all others on hover
for (let i = 0; i < subcategories.length; i++) {
  subcategories[i].addEventListener("mouseover", function() {
    currentVisibleDiv.style.display = "none";
    hiddenDivs[i].style.display = "flex";
    currentVisibleDiv = hiddenDivs[i];
  });
}

