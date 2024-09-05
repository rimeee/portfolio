// 로또 번호 생성기 만들기
const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  let { digitCount, maxNumber } = luckyNumber;
  // 구조분해할당
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `재추첨하겠습니다!`;
  }
});

// 끝말잇기 게임 : A제시어 : 자전"거" / B 거름 / 거위
// 문자열 / 메서드 : 베열, 인덱스값
// 정답 / 틀렸습니다.
const search = document.querySelector(".search");
search.addEventListener("click", (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;

  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다.";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
});
