const shareBtn = document.getElementById("sharebtn");
const shareMenu = document.getElementById("share-menu");

shareBtn.addEventListener("click", () => {
  shareMenu.classList.toggle("share-menu-on");
});