$('li.droppdown-fullwidth').on('click', function() {
    $('.droppdown-menu').toggle();
});
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
//     document.getElementById("navbar1").style.background = "#CAB8DB";
//     document.getElementById("navbar2").style.background = "#CAB8DB";
//     // document.getElementById("navbar").style.border = "3px black solid";
//   } else {
   
//     document.getElementById("navbar1").style.background = "none";
//   }
// }
/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


// document.addEventListener("DOMContentLoaded", function(){

//   el_autohide = document.querySelector('.autohide');
  
//   // // add padding-top to bady (if necessary)
//   // navbar_height = document.querySelector('.navbar').offsetHeight;
//   // document.body.style.paddingTop = navbar_height + 'px';

//   if(el_autohide){
//     var last_scroll_top = 0;
//     window.addEventListener('scroll', function() {
//           let scroll_top = window.scrollY;
//          if(scroll_top < last_scroll_top) {
//               el_autohide.classList.remove('scrolled-down');
//               el_autohide.classList.add('scrolled-up');
//           }
//           else {
//               el_autohide.classList.remove('scrolled-up');
//               el_autohide.classList.add('scrolled-down');
//           }
//           last_scroll_top = scroll_top;
//     }); 
//     // window.addEventListener
//   }
//   // if
// }); 

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar1").style.top = "0";
//     document.getElementById("navbar2").style.top = "0";
//     document.getElementById("navbar1").style.background = "#CAB8DB";
//     document.getElementById("navbar2").style.background = "#CAB8DB";
//     document.getElementById("navbar2").style.top = "+70px";
//   } else {
//     document.getElementById("navbar1").style.top = "-70px";
//     document.getElementById("navbar2").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// }