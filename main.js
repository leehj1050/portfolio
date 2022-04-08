let view_my_work = document.querySelector(".cont_main_text");
let menu_AboutMe = document.querySelector(".aboutme");
let menu_Skills = document.querySelector(".skills");
let menu_Project = document.querySelector(".project");

//956
//1919
//2908

//1700 skill

console.log(scrollY);

//메뉴버튼 클릭시 페이지 이동
click_Menu = () => {
  view_my_work.addEventListener("click", () => {
    window.scrollTo(0, 830);
  });
  menu_AboutMe.addEventListener("click", () => {
    window.scrollTo(0, 830);
  });
  menu_Skills.addEventListener("click", () => {
    window.scrollTo(0, 1940);
  });
  menu_Project.addEventListener("click", () => {
    window.scrollTo(0, 2908);
  });
};
click_Menu();

//스크롤시에 헤더 color변경
scroll_move = () => {
  window.addEventListener("scroll", () => {
    if (scrollY > 1) {
      document.querySelector(".scroll_top_icon").style.display = "block";
      document.querySelector("ul").style.backgroundColor = "#1b242f";
      document.querySelector("ul").style.display = "flex";
      let items = [menu_AboutMe, menu_Skills, menu_Project];
      items.forEach((item) => {
        item.style.color = "#fff";
      });
    } else if (scrollY === 0) {
      document.querySelector(".scroll_top_icon").style.display = "none";
      document.querySelector("ul").style.backgroundColor = "#fff";
      document.querySelector("ul").style.display = "none";
    }
  });
};
scroll_move();

//스크롤시 스킬 애니메이션
scrollSkill = () => {
  window.addEventListener("scroll", () => {
    if (scrollY > 1500) {
      document.querySelector(".skills_title").style.animation =
        "opacityFnc 1.6s forwards";
      let text = document.querySelectorAll(".text");
      text.forEach((i) => {
        i.style.animation = "move_text1 1.2s forwards";
      });
      let icon = document.querySelectorAll(".icons");
      icon.forEach((i) => {
        i.style.animation = "move_text2 1.2s forwards";
      });
      let graph = document.querySelectorAll(".graph div li");
      graph[0].style.animation = "skillGraph 2.5s";
      graph[1].style.animation = "skillGraph2 2.5s";
      graph[2].style.animation = "skillGraph3 2.5s";
      graph[3].style.animation = "skillGraph4 2.5s";
    }
  });
};
scrollSkill();
