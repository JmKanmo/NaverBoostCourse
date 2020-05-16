function setEventListener() {
  let btn = document.querySelector(".menu_btn");
  let menu_list = document.querySelector(".menu_list");
  let sns_list = document.querySelector(".sns_list");

  if (btn.clientWidth === 0) {
    menu_list.style.display = "block";
    sns_list.style.display = "block";
  } else {
    menu_list.style.display = "none";
    sns_list.style.display = "none";
  }

  btn.addEventListener("click", function () {
    if (menu_list.style.display === "none") {
      menu_list.style.display = "block";
    } else {
      menu_list.style.display = "none";
    }

    if (sns_list.style.display === "none") {
      sns_list.style.display = "block";
    } else {
      sns_list.style.display = "none";
    }
  });

  window.matchMedia("(max-width: 767px)").addListener(() => {
    if (menu_list.style.display === "none") {
      menu_list.style.display = "block";
    }

    if (sns_list.style.display === "none") {
      sns_list.style.display = "block";
    }
  });
}

// Execute all functions
document.addEventListener("DOMContentLoaded", function () {
  setEventListener();
});
