document.body.addEventListener("click", (ev)=>{
  const isExpandableTitle = ev.target.closest(".expandable__title-bar");
  const expandable = ev.target.closest(".expandable");

  if(!isExpandableTitle) {
    return;
  }

  expandable.classList.toggle("expandable--open");
})


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".topnav a:not(.dark)");
  const sections = document.querySelectorAll(".child");

  function updateActiveLink() {
    let currentSection = "home"; // Default to "home" if at the top

    // Check if at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      currentSection = "contact";
    } else if (window.scrollY > 50) { // Check if not at the very top
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call to set the active link based on the initial scroll position
});

function darkImage() {
  const buttonImage = document.getElementById("darkToggle");
  if (buttonImage.getAttribute('src') === "./images/moon.png") {
    buttonImage.setAttribute('src', "./images/sun.png");
  }else {
    buttonImage.setAttribute('src', "./images/moon.png");
  }
}

function toggleDark() {
  const darkButton = document.getElementById("darkButton")
  const body = document.body;
  const flexChildren = document.getElementsByClassName("child")
  const link = document.getElementsByClassName("link")
  const contact = document.getElementById("contactFormWrap")
  const contactTitle = document.getElementById("titleBar")
  const contactSubmit = document.getElementById("submitPush")

  body.classList.toggle("dark-mode");
  for (let i = 0; i < flexChildren.length; i++) {
    flexChildren[i].classList.toggle("dark-mode2");
  }
  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle("dark-mode-link");
  }
  contact.classList.toggle("dark-mode-contact");
  contactTitle.classList.toggle("dark-mode-contact2");
  contactSubmit.classList.toggle("dark-mode-contact3");
  darkImage()
}