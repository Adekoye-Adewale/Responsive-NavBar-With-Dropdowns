const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".m-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
  nav.classList.toggle("show");
});

// var acc = document.getElementsByClassName("mobile-main-menu");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var mobilesubmenu = this.nextElementSibling;
//     if (mobilesubmenu.style.minHeight) {
//       mobilesubmenu.style.minHeight = null;
//     } else {
//       mobilesubmenu.style.minHeight = mobilesubmenu.scrollHeight + "px";
//     } 
//   });
// }

// var acc = document.getElementsByClassName("mobile-about-submenu");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("sactive");
//     var mobilesubsubmenu = this.nextElementSibling;
//     if (mobilesubsubmenu.style.maxHeight) {
//       mobilesubsubmenu.style.maxHeight = null;
//       // mobilesubsubmenu.style.fontSize = null;
//       // mobilesubsubmenu.style.marginTop = null;
//       // mobilesubsubmenu.style.overflow = "hidden";
//       // mobilesubsubmenu.style.lineHeight = null;
//     } else {
//       mobilesubsubmenu.style.maxHeight = mobilesubsubmenu.scrollHeight + "px";
//       // mobilesubsubmenu.style.fontSize = 8 + "px";
//       // mobilesubsubmenu.style.marginTop = -5 + "px";
//       // mobilesubsubmenu.style.overflow = "visible";
//       // mobilesubsubmenu.style.lineHeight = 10 + "px";
//     } 
//   });
// }