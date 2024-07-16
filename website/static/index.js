"use strict";

const closeFlash = document.querySelector(".close-flash");
const flashMssg = document.querySelector(".flash-mssg");

const closeBtn = function () {
  flashMssg.style.display = "none";
};

closeFlash, addEventListener("click", closeBtn);
