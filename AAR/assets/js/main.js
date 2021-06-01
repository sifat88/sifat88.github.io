
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
const siteHeader = document.querySelector('header');
const menuOpen = document.querySelector('.menu__open');
const menuclose = document.querySelector('.menu__close');
if(window.innerWidth < 767) {
menuOpen.addEventListener('click' , ()=> {
  siteHeader.style.left = "0%";
})
menuclose.addEventListener('click' , ()=> {
  siteHeader.style.left = "-100%";
})
slideNav.forEach (function (elm, idx){ 
    elm.addEventListener("click" , ()=> siteHeader.style.left = "-100%")
  });
}





const slides = document.querySelectorAll("section");
const navContainer = document.querySelector("nav ul");
const slideNav = document.querySelectorAll("nav ul > li > a");

let slid;


const goToPage = function (slideNo) {
  slides.forEach (function (slide, index){
    slide.style.transform = `translateX(${-100 * (index - slideNo)}%)`;
    
    slide.addEventListener("transitionend" , ()=> {

    })
  });
}
goToPage(0);


slideNav.forEach (function (elm, idx){ 
  elm.addEventListener("click", (evn)=> {
    evn.preventDefault();
    slideNav.forEach((elm) => elm.classList.remove('nav-active'));
    elm.classList.add('nav-active');
  })
});


navContainer.addEventListener("click" , (e)=> {
  if(e.target.classList.contains("naav")){
    const slid = e.target.getAttribute("data-slide");
    if( slid == 1 || slid == 3) {
      setTimeout(()=> {
        document.querySelector("header").classList.add("white-header");
      },500)
    } else {
      document.querySelector("header").classList.remove("white-header");
    }
    goToPage(slid);
  }
})

