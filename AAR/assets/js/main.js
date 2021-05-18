
// // Sticky menu =========================================
// const siteHeader = document.querySelector('header')



// window.addEventListener("scroll", ()=> {
  
//   if(siteHeader){
//     if (window.pageYOffset > 100 ){
//       siteHeader.classList.add("stickyy");
//     }  else if (window.pageYOffset === 0 ){
//       siteHeader.classList.remove("stickyy");
//     }
//   }

// });
if(window.innerWidth < 767) {
  const siteHeader = document.querySelector('header');
const menuOpen = document.querySelector('.menu__open');
const menuclose = document.querySelector('.menu__close');
menuOpen.addEventListener('click' , ()=> {
  siteHeader.style.left = "0%";
})
menuclose.addEventListener('click' , ()=> {
  siteHeader.style.left = "-100%";
})
}
