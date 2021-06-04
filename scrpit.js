"use-strict";
const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const naviLinks = document.querySelector(".navi-links");
const allNaviLinks = document.querySelectorAll(".navi-link");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  open.classList.toggle("close");
  naviLinks.classList.toggle("navi-links-show");
});

allNaviLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    naviLinks.classList.remove("navi-links-show");
    open.classList.toggle("close");
  });
});

//Preload
const preloadPage = document.querySelector(".preload-page");
window.addEventListener("load", function () {
  preloadPage.classList.add("hide");
  gsap.from(".navigation", { duration: 0.5, height: "0" });
  gsap.from(".logo", { duration: 0.5, delay: 0.5, y: -100 });
  gsap.from(".hamburger", { duration: 0.5, delay: 0.7, y: -100 });

  const landingPageTimeline = gsap.timeline({
    defaults: { duration: 0.7 },
  });
  landingPageTimeline
    .from(
      ".navi-link",
      {
        opacity: 0,
        stagger: 0.2,
      },
      0.6
    )
    .from(
      ".heading h1",
      {
        opacity: 0,
        y: 30,
      },
      1
    )
    .from(
      "#landing-h2",
      {
        opacity: 0,
        y: 30,
      },
      1.2
    )
    .from(".translate-btns", { right: -100 });
});

//Smooth scroll

$(".list-item .navi-link").on("click", function (e) {
  if (this.hash !== "") {
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

//GSAP
// Intersction observer animation
const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.timeline.play();
    }
  });
};
const options = {
  threshold: 0.15,
};
const observer = new IntersectionObserver(callback, options);

//Text animations
const targets = document.querySelectorAll(".animation");
targets.forEach(function (target) {
  const text = target.querySelector(".about-text");
  const action = gsap
    .timeline({ paused: true })
    .from(text, { x: -100, opacity: 0, duration: 1, delay: 0.7 });

  target.timeline = action;
});
Array.prototype.forEach.call(targets, (el) => {
  observer.observe(el);
});

//Titles animation
const titles = document.querySelectorAll(".title-animation");
titles.forEach(function (target) {
  const action = gsap
    .timeline({ paused: true })
    .from(target, { y: 30, opacity: 0, delay: 0.5 });
  target.timeline = action;
});
Array.prototype.forEach.call(titles, (el) => {
  observer.observe(el);
});

//Image sliders animation
const imageSliders = document.querySelectorAll(".image-slider");
imageSliders.forEach(function (target) {
  const action = gsap
    .timeline({ paused: true })
    .from(target, { y: 30, opacity: 0, duration: 1, delay: 0.7 });
  target.timeline = action;
});
Array.prototype.forEach.call(imageSliders, (el) => {
  observer.observe(el);
});

//Contact boxes animation
const boxes = document.querySelectorAll(".box");
boxes.forEach(function (target) {
  const action = gsap
    .timeline({ paused: true })
    .from(target, { y: 30, opacity: 0, duration: 0.5, delay: 0.7 });
  target.timeline = action;
});
Array.prototype.forEach.call(boxes, (el) => {
  observer.observe(el);
});

const btns = document.querySelectorAll(".btn-contact");
btns.forEach(function (target) {
  const action = gsap
    .timeline({ paused: true })
    .from(target, { y: 30, opacity: 0, duration: 0.5, delay: 0.7 });
  target.timeline = action;
});
Array.prototype.forEach.call(btns, (el) => {
  observer.observe(el);
});
