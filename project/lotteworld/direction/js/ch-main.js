// =========sldier time=============
const mainDay = new Date();
const mainDayMonth = mainDay.getMonth() + 1;
const mainDayDate = mainDay.getDate();
const sliderTimedesc = document.querySelector(".slidernav-timedesc p");
const mainDayDay = mainDay.getDay();
let Day = "";
switch (mainDayDay) {
  case 0:
    Day = "일";
    break;
  case 1:
    Day = "월";
    break;
  case 2:
    Day = "화";
    break;
  case 3:
    Day = "수";
    break;
  case 4:
    Day = "목";
    break;
  case 5:
    Day = "금";
    break;
  case 6:
    Day = "토";
    break;
}
sliderTimedesc.innerText = `${mainDayMonth}월 ${mainDayDate}일 (${Day})`;

// ==========main header hover add class===========
const mainHeader = document.querySelectorAll(".mainheader-gnb li");
const sliderNav = document.querySelector("#slidernav");
const sliderNavMain = document.querySelectorAll(".slidernav-mainbox ul");
const sliderNavMainLi = document.querySelectorAll(".slidernav-mainbox ul li");

//main header moseover down

for (let i = 0; i < mainHeader.length; i++) {
  mainHeader[i].addEventListener("mouseover", (e) => {
    e.preventDefault();
    mainHeader[i].classList.add("active");
    sliderNav.classList.add("active");
    // sliderNavMain[i].classList.add("over");
  });
  mainHeader[i].addEventListener("mouseout", (e) => {
    e.preventDefault();
    mainHeader[i].classList.remove("active");
    // sliderNavMain[i].classList.remove("over");
  });
}

sliderNav.addEventListener("mouseover", (e) => {
  e.preventDefault();
  sliderNav.classList.add("active");
});
sliderNav.addEventListener("mouseout", (e) => {
  e.preventDefault();
  sliderNav.classList.remove("active");
});

// ====ul over====
for (let i = 0; i < sliderNavMain.length; i++) {
  sliderNavMain[i].addEventListener("mouseover", (e) => {
    e.preventDefault();
    sliderNavMain[i].classList.add("over");
  });
  sliderNavMain[i].addEventListener("mouseout", (e) => {
    e.preventDefault();
    sliderNavMain[i].classList.remove("over");
  });
}

//====li over====
for (let i = 0; i < sliderNavMainLi.length; i++) {
  sliderNavMainLi[i].addEventListener("mouseover", (e) => {
    e.preventDefault();
    sliderNavMainLi[i].classList.add("active");
  });
  sliderNavMainLi[i].addEventListener("mouseout", (e) => {
    e.preventDefault();
    sliderNavMainLi[i].classList.remove("active");
  });
}

//========mo-nav monav-lnb show============
//monav show
const monavShowBtn = document.querySelector(".mainheader-togglebtn");
const monavCloseBtn = document.querySelector(".monav-header-closebtn");
const monav = document.querySelector("#mo-slidernav");

const monavShow = () => {
  monav.classList.add("active");
};

const monavClose = () => {
  monav.classList.remove("active");
};

monavShowBtn.addEventListener("click", monavShow);
monavCloseBtn.addEventListener("click", monavClose);

//monav inner lnb
const monavMorebtn = document.querySelectorAll(".monav-gnb");
const monavGnb = document.querySelectorAll(".monav-gnb-li");
const monavLnb = document.querySelectorAll(".monav-lnb");

for (let i = 0; i < monavMorebtn.length; i++) {
  const monavLnbHandle = () => {
    monavGnb[i].classList.toggle("active");
    monavLnb[i].classList.toggle("active");
  };

  monavGnb[i].addEventListener("click", monavLnbHandle);
}
