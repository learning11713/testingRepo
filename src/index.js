// Smooth Scrolling
let navMenuAnchorTags = document.querySelectorAll(
  ".horizontal-list .normal__link"
);

for (let i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();

    let targetSectionID = this.textContent.trim().toLowerCase();
    let targetSection = document.getElementById(targetSectionID);

    let interval = setInterval(function () {
      let targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 100) {
        clearInterval(interval);
      }

      if (targetSectionID == "contact" && targetSectionCoordinates.top <= 160) {
        clearInterval(interval);
      }

      window.scrollBy(0, 50);
    }, 10);
  });
}

// Navigation Bar
const barsIcon = document.getElementById("bars");
const crossIcon = document.getElementById("cross");
const mainNavContainer = document.getElementById("main-nav-container");

function NavFunction() {
  mainNavContainer.classList.toggle("mobile-list");
  barsIcon.classList.toggle("display-none");
  crossIcon.classList.toggle("display-block");
}

barsIcon.onclick = NavFunction;
crossIcon.onclick = NavFunction;

// Experience Section
const educationSection = document.querySelector(".education-timeline");
const workSection = document.querySelector(".work-timeline");
const educationButton = document.querySelector(".button-education");
const workButton = document.querySelector(".button-work");

function changeDisplayFunction(cButton, uButton, cSection, uSection) {
  cButton.style.color = "rgb(13, 0, 196)";
  uButton.style.color = "rgb(24, 24, 24)";
  cSection.style.display = "block";
  uSection.style.display = "none";
  cButton.style.borderBottom = "3px solid rgb(255, 187, 0)";
  uButton.style.borderBottom = "0";
}

workButton.onclick = () => {
  changeDisplayFunction(
    workButton,
    educationButton,
    workSection,
    educationSection
  );
};

educationButton.onclick = () => {
  changeDisplayFunction(
    educationButton,
    workButton,
    educationSection,
    workSection
  );
};
