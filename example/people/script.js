//도착지점의 좌표 = 마우스 x 좌표
let x = 0;

//타겟아이템의 좌표 = 마우스 이동에 따른 좌표변화
let targetX = 0;

//마우스 이동에 따른 타겟 아이템의 이동속도
const speed = 0.1;

//실제 마우스 이벤트로 인해 이동해야할 이미지 정의
const contentAll = document.querySelectorAll(".contWrap img");
const [shadow, date, human, textImg] = contentAll;

//마우스 이동에 의한 이벤트 적용
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});
const loop = () => {
  targetX += (x - targetX) * speed;
  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 35}px)`;
  textImg.style.transform = `translateX(${-targetX / 10}px)`;
  window.requestAnimationFrame(loop);
};
loop();
