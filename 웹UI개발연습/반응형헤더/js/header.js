function setEventListener() {
  let btn = document.querySelector(`.header_item:nth-child(n+3) .menu_btn_box`);
  let menu = document.querySelector(`.menu`);

  btn.addEventListener("click", function () {
    if (!menu.style.display || menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  window.matchMedia("(min-width: 768px)").addListener(() => {
    if (menu.style.display) {
      menu.style.display = "none";
    }
  });
}

// Execute all functions
document.addEventListener("DOMContentLoaded", function () {
  setEventListener();
});
