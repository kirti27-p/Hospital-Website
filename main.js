'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * add event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


//about 
const modalViews = document.querySelectorAll(".s1__modal"),
modalBtns = document.querySelectorAll(".s1__button"),
modalCloses = document.querySelectorAll(".s1__modal-close");

let modal = function (modalClick) {
modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener("click", () => {
  modal(i);
});
});

modalCloses.forEach((modalClose) => {
modalClose.addEventListener("click", () => {
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
});
});



//counter
document.addEventListener("DOMContentLoaded",()=>{
  function counter(id,start,end,duration){
      let obj=document.getElementById(id),
      current=start,
      range=end-start,
      increment=end > start ? 1: -1,
      step=Math.abs( Math.floor(duration/range)),
      timer=setInterval(()=>{
          current+=increment;
          obj.textContent=current;
          if(current==end){
              clearInterval(timer);
          }
      },step);
  }
  counter("count1",0,62,10000);
  counter("count2",100,5400,2501);
  counter("count3",0,124,10000);
  counter("count4",0,300,10000);
});



