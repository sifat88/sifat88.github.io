
// Price Ranger 
const priceRanger = document.getElementById("priceRange");
const priceRangerBG = document.getElementById("rngerBg");
const rngValue = document.getElementById("rngVal");

priceRanger.addEventListener("input", () => {
    priceRangerBG.style.width = priceRanger.value + "%";
    rngValue.innerHTML = "$" + priceRanger.value;
    console.log(priceRangerBG.style.width = priceRanger.value + "%");
})

// Toggole Hide/Show
const toogleList = ( prm1 , prm2) => {
    prm1.addEventListener("click", ()=> {
        if(prm1.innerHTML === "Hide"){
            prm1.innerHTML = "Show";
        }else{
            prm1.innerHTML = "Hide";
        }
        prm2.classList.toggle("show-list");
    })
}

toogleList(showNetSpeedList, netSpeedList);
toogleList(showTvList, tvchanList);

// =================    Filter by Category

const netPacks = document.querySelectorAll("div.net-pack");
const tvPacks = document.querySelectorAll("div.tv-pack");
const voicePacks = document.querySelectorAll("div.voice-pack");
const smrtHmePacks = document.querySelectorAll("div.smarthome-pack");


const pkhdText = document.getElementById("phText");
const topPack = document.getElementById("topPK");
const noDeal = document.getElementById("noDl");


const netCheck = document.getElementById("netPack");
const tvCheck = document.getElementById("tvPk");
const voiceCheck = document.getElementById("voicePk");
const smrtHmeCheck = document.getElementById("smartHome");
console.log(smrtHmePacks);


// netCheck.addEventListener("click", () => {
//     topPack.classList.toggle("hidden-pack");
//     netPacks.forEach( elm => {
//         elm.classList.toggle("hidden-pack");
//     })
// })
// tvCheck.addEventListener("click", () => {
//     tvPacks.forEach( elm => {
//         elm.classList.toggle("hidden-pack");
//     })
// })
// voiceCheck.addEventListener("click", () => {
//     voicePacks.forEach( elm => {
//         elm.classList.toggle("hidden-pack");
//     })
// })
// smrtHmeCheck.addEventListener("click", () => {
//     smrtHmePacks.forEach( elm => {
//         elm.classList.toggle("hidden-pack");
//     })
// })

const filterFunc = (prm, param) => {
    prm.addEventListener("click", () => {
        if(prm === netCheck){
            topPack.classList.toggle("hidden-pack");
        } 
        
        param.forEach( elm => {
            elm.classList.toggle("hidden-pack");
        })
    })  
}
filterFunc(netCheck, netPacks);
filterFunc(tvCheck, tvPacks);
filterFunc(voiceCheck, voicePacks);
filterFunc(smrtHmeCheck, smrtHmePacks);


window.addEventListener("click", () => {
    if(!netCheck.checked && !tvCheck.checked && !voiceCheck.checked && !smrtHmeCheck.checked){
        pkhdText.innerHTML = "Sorry! No offer Found";
        noDeal.classList.remove("hidden-pack");
    } else {
        pkhdText.innerHTML = "6 Internet, TV and Voice offers";
        noDeal.classList.add("hidden-pack");
    }
})


    