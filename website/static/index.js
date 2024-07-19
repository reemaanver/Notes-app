"use strict";

// Close Flash Mssg
const closeFlash = document.querySelector(".close-flash");
const flashMssg = document.querySelector(".flash-mssg");

const closeBtn = function () {
  flashMssg.style.display = "none";
};

closeFlash, addEventListener("click", closeBtn);

// Delete Note

function dltNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

document.querySelectorAll(".dlt-note").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const noteId = e.target.getAttribute("data-id");
    dltNote(noteId);
  });
});
