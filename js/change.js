window.onload = function () {
  // 스크롤 이동 함수 정의
  // scrollToSection()라는 이름의 함수를 정의합
  function scrollToSection(sectionId) {
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장합니다.
    const section = document.querySelector(sectionId);

    // section이 존재하는 경우에만 스크롤 이동을 수행합니다.
    if (section) {
      // 부드러운 스크롤 이동을 위해 scrollIntoView 메서드를 호출합니다.
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  // 비쥬얼이동버튼 스크롤 기능
  const button = document.querySelector(".visual-bt");
  // 버튼을 클릭했을때 스크롤 이동 함수를 실행합니다.
  button.addEventListener("click", function () {
    scrollToSection("#business");
  });
  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = this.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
  // 안내창 스크립트
  let body = document.querySelector("body");
  let modal = document.querySelector(".modal-wrap");
  modal.addEventListener("click", function () {
    modal.style.display = "none";
    fadeOut(modal);
  });
};
