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

  body.classList.toggle("dark-mode");
  for (let i = 0; i < flexChildren.length; i++) {
    flexChildren[i].classList.toggle("dark-mode2");
  }
  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle("dark-mode-link");
  }
  darkImage()
}
