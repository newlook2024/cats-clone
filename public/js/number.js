const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");

burger.addEventListener("click", () => {
  if (menu.style.zIndex < 50) {
    menu.classList.add("opacity-100");
    menu.classList.add("z-50");
    menu.classList.remove("opacity-0");
    menu.classList.remove("-z-50");
  }
  if (document.body.style.overflowY == "auto") {
    document.body.style.overflowY == "hidden";
  } else {
    document.body.style.overflowY == "auto";
  }
});

closeBtn.addEventListener("click", () => {
  if (menu.style.zIndex == 0) {
    menu.classList.add("opacity-0");
    menu.classList.add("-z-50");
    menu.classList.remove("opacity-100");
    menu.classList.remove("z-50");
  }
  if (document.body.style.overflowY == "hidden") {
    document.body.style.overflowY == "auto";
  } else {
    document.body.style.overflowY == "hidden";
  }
});

const changeImg = document.querySelectorAll("#changeImg");
const mainImg = document.getElementById("mainImg");

changeImg.forEach((item, index) => {
  item.classList.add('cursor-pointer')
  mainImg.classList.add('cursor-pointer')
  item.addEventListener("click", () => {
    mainImg.src = changeImg[index].src;
  });
});

console.log("container size:", 1366 - 186 + 32);
