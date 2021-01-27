const siteNav = document.querySelector("div.site-navigation");
const header = document.querySelector("header#welcome");
const welcomeImg = document.querySelector("div.welcome-img");
const navLInks = document.querySelectorAll("div.site-navigation > nav > ul > li > a");
const navToggler = document.getElementById("navToggle");

window.addEventListener("load" , (e) => {
    e.preventDefault;
    setTimeout(() => {
        siteNav.style.transform = "scale(1)";
    },500)
})
navToggler.addEventListener("click", (e)=> {
    e.preventDefault;
    navToggler.parentNode.classList.toggle("nav-active");
})
navLInks.forEach((elm)=> {
    elm.addEventListener('click', (e)=> {
        setTimeout(()=>{
            siteNav.classList.remove("nav-active")
        }, 500);
    })
})
welcomeImg.addEventListener('mouseover', (e) => {
    header.classList.add('header-hover');
})
welcomeImg.addEventListener('mouseout', (e) => {
    header.classList.remove('header-hover');
})

const allBtn = document.getElementById('allWork');
const funBtn = document.getElementById('myWork');
const clientBtn = document.getElementById('clientWork');

const allWrk = document.querySelectorAll('div.single-project');
const myWrk = document.querySelectorAll('div.single-project.fun-project');
const clWrk = document.querySelectorAll('div.single-project.client-project');

clientBtn.addEventListener('click',() => {
    clWrk.forEach(elm => {
        elm.classList.remove('hide-project');
    })
    myWrk.forEach(elm => {
        elm.classList.add('hide-project');
    })
})
funBtn.addEventListener('click',() => {
    myWrk.forEach(elm => {
        elm.classList.remove('hide-project');
    })
    clWrk.forEach(elm => {
        elm.classList.add('hide-project');
    })
})
allBtn.addEventListener('click',() => {
    allWrk.forEach(elm => {
        elm.classList.remove('hide-project');
    })
})