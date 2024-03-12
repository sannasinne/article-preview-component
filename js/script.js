var button = document.querySelector("button");
var share = document.querySelector(".card__info-share-social");
var shareIcon = document.querySelector(".share-icon");

button.addEventListener("click", function () {
  button.classList.add("share-click");
  shareIcon.classList.add("share-click-icon");
  share.classList.add("show");
});