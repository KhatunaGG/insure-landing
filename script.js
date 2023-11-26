let crossLogo = document.querySelector(".cross__logo");
let listLogo = document.querySelector(".list__logo");
let cover = document.querySelector(".cover");

let logoIcon = Array.from(document.querySelectorAll(".header__logo"));
console.log(logoIcon);

logoIcon.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("list__logo")) {
      cover.classList.add("cover-active");
      el.classList.add("displayNone");
      crossLogo.classList.add("displayBlock");
    } else if (el.classList.contains("cross__logo")) {
      cover.classList.remove("cover-active");
      el.classList.remove("displayBlock");
      listLogo.classList.remove("displayNone");
    }
  });
});
