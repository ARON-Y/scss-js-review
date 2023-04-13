// 1단계 : 변수에 js로 변화, 동작 시킬 요소 담기
let articles = document.querySelectorAll("article");
let aside = document.querySelector("aside");
let close = aside.querySelector("span");

/* 유사배열로 반환된 articles를 반복해 각각의 article 개별로 이벤트를 걸어줄 예정이다. */

for (let el of articles) {
  el.addEventListener("mouseenter", function (e) {
    e.currentTarget.querySelector("video").play();
  });

  el.addEventListener("mouseleave", function (e) {
    e.currentTarget.querySelector("video").pause();
  });

  el.addEventListener("click", function (e) {
    aside.classList.add("on");

    let art_h2 = e.currentTarget.querySelector("h2").innerText;
    let art_p = e.currentTarget.querySelector("p").innerText;
    let art_video_src = e.currentTarget
      .querySelector("video")
      .getAttribute("src");

    aside.querySelector("h2").innerText = art_h2;
    aside.querySelector("p").innerText = art_p;
    aside.querySelector("video").setAttribute("src", art_video_src);

    aside.querySelector("video").play();
  });
}

close.addEventListener("click", function () {
  aside.classList.remove("on");
  aside.querySelector("video").pause();
});
