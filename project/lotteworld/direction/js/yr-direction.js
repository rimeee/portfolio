const left_first_btn = document.querySelector(".left-first-btn");
const left_second_btn = document.querySelector(".left-second-btn");
const left_first_drop = document.querySelector(".left-first-drop");
const left_second_drop = document.querySelector(".left-second-drop");

left_first_btn.addEventListener("click", () => {
  if (left_first_drop.style.display === "none") {
    left_first_drop.style.display = "block";
    left_second_drop.style.display = "none";
    share_drop_items.style.display = "none";
  } else {
    left_first_drop.style.display = "none";
  }
});
left_second_btn.addEventListener("click", () => {
  if (left_second_drop.style.display === "none") {
    left_second_drop.style.display = "block";
    left_first_drop.style.display = "none";
    share_drop_items.style.display = "none";
  } else {
    left_second_drop.style.display = "none";
  }
});

const share = document.querySelector(".share");
const share_drop_items = document.querySelector(".share-drop-items");

share.addEventListener("click", () => {
  if (share_drop_items.style.display === "none") {
    share_drop_items.style.display = "block";
    left_first_drop.style.display = "none";
    left_second_drop.style.display = "none";
  } else {
    share_drop_items.style.display = "none";
  }
});

//map
let container = document.getElementById("loadmap"); 
let options = {
  center: new kakao.maps.LatLng(37.51112, 127.095973), 
  level: 3, 
};

let map = new kakao.maps.Map(container, options); 
