const priceRanger = document.getElementById("priceRange");
const priceRangerBG = document.getElementById("rngerBg");
const rngValue = document.getElementById("rngVal");

priceRanger.addEventListener("input", () => {
    priceRangerBG.style.width = priceRanger.value + "%";
    rngValue.innerHTML = "$" + priceRanger.value;
    console.log(priceRangerBG.style.width = priceRanger.value + "%");
})


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