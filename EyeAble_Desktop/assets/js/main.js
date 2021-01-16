const eyeAbleMain = document.querySelector("div.eyeAble_main");
const eyeAbleLaunchbtn = document.getElementById("eyeAbleLaunch");

eyeAbleLaunchbtn.addEventListener("click" , ()=> {
    eyeAbleMain.classList.toggle("eyeAbleON");
})

// Single feature toggle  ========================================//
const singleUI = document.querySelectorAll("div.eyeAble_single-feature");
const cancelUI = document.querySelectorAll("div.eyeAble_text-wrapper > img.eyeAble_img");

const secondaryOptions = document.querySelectorAll("div.eyeAble_secondary-options-header");


singleUI.forEach(elm => {
    elm.addEventListener("click", () => {
        elm.classList.toggle("eyeAble_active");
    })
});

secondaryOptions.forEach(elm => {
    elm.addEventListener("click", () => {
        elm.parentNode.classList.toggle("eyeAble_collapsible");
    })
});

// Main Filter value  ========================================//
const Blaufilterblk = document.getElementById("eyeAbleBlaufilterBlock");
const Blaufilter = document.getElementById("eyeAbleBlaufilterBlock");
const Blaufilterbg = document.getElementById("eyeAblefilteBG");

Blaufilter.addEventListener("input", (e)=> {
    Blaufilterbg.style.width = e.target.value + '%';
})

const Farbschwachefilterblk = document.getElementById("eyeAbleFarbschwachefilterBlock");
const Farbschwachefilter = document.getElementById("eyeAbleFarbschwachefilter");
const FarbschwachefilterBG = document.getElementById("eyeAbleFarbschwachefilterBG");

Farbschwachefilter.addEventListener("input", (e)=> {
    FarbschwachefilterBG.style.width = e.target.value + '%';
})

// ScreenReader toggle ====================//
const SRSIcon = document.getElementById("srIcon");
const SRSContent = document.getElementById("srsContent");
const SRbtn = document.querySelector("div.eyeAble_sr-reading");

SRSIcon.addEventListener("click" , ()=> {
    SRSIcon.classList.toggle("eyeAble_sr-active");
    SRSContent.classList.toggle("eyeAble_sr-active");
})
SRbtn.addEventListener("click" , ()=> {
    SRbtn.classList.toggle("eyeAble_sr-readingactive");
})


// ColorWeeknessRanger toggle ====================//

const colorweeknessText = document.querySelectorAll("p.eyeAble_colorweakness-text");
const rangerOFF = document.querySelectorAll("div.eyeAble_rangeroff");


colorweeknessText.forEach( elm => {
    elm.addEventListener("click", () => {
        elm.parentNode.parentNode.classList.add("eyeAble_ranger-active");
        console.log(elm.parentNode.parentNode.classList);
    })
})

rangerOFF.forEach( elm => {
    elm.addEventListener("click", (e) => {
        elm.parentNode.parentNode.classList.remove("eyeAble_ranger-active");
    })
})

const colorWeeknessSlider = document.querySelectorAll("input.eyeAble_colorranger");
const colorWeeknessSliderBG = document.querySelectorAll("div.eyeAble_colorrangerbg");

colorWeeknessSlider.forEach(singleRanger => {
    singleRanger.addEventListener("input" , (e)=> {
        e.target.nextElementSibling.style.width = e.target.value + "%";
        console.log(e.target.parentNode.childNodes);
        e.target.parentNode.childNodes[5].innerHTML = "Stärke: " + e.target.value + "%";
    })
})

// Time and Place Automotion ====================//
const automotionBox = document.getElementById("automotionbox");
const timeAutoButton = document.getElementById("timeAutomotionbtn");
const placeAutoButton = document.getElementById("placeAutomotionbtn");

const timeAutoBox = document.getElementById("timeAutomotion");
const placeAutoBox = document.getElementById("placeAutomotion");
const automotionText = document.getElementById("automotiontext");

timeAutoButton.addEventListener("click" , ()=> {
    if( placeAutoBox.classList.contains('eyeAble_automotion-active')){
        placeAutoBox.classList.remove('eyeAble_automotion-active');
    }
    automotionBox.classList.add("eyeAble_automotion-active");
    timeAutoBox.classList.add("eyeAble_automotion-active");
})
placeAutoButton.addEventListener("click" , ()=> {
    if( timeAutoBox.classList.contains('eyeAble_automotion-active')){
        timeAutoBox.classList.remove('eyeAble_automotion-active');
    }
    automotionBox.classList.add("eyeAble_automotion-active");
    placeAutoBox.classList.add("eyeAble_automotion-active");
})