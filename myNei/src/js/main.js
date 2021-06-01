const mainBox = document.querySelector(".view__result")
const viewResult = document.querySelector(".home__country")
const viewNeighbor = document.querySelector(".neighbor__country")
const searchInput = document.querySelector(".search__form input")
const searchData = document.querySelector(".search__form input + datalist")
const searchBtn = document.querySelector(".search__form button")
const rankList = document.querySelector("ul.rank__list");
const btnGrp = document.querySelectorAll(".btn-grp > .btn");
let allCountry = [];
let sortState = false;
let allArea = [];
let srchQuery = "";


// Main Function
function callData (query){
    let borders =  [];
    async function getJSON () {
        const callApi = await fetch("https://restcountries.eu/rest/v2/all");
        return apiResponse = await callApi.json();
    }
    getJSON().then(apidta => {
        let apiData = [...apidta];
        let countryData = "";
        apiData.forEach(arr => {
            allCountry.push(arr.name);
            if(arr.name === query) {
                renderMarkup(arr)
                countryArea = arr.area;
                countryData = {
                        name : arr.name,
                        flag : arr.flag,
                        area : arr.area,
                        population : arr.population
                    };
                borders = arr.borders;
            }
        })
        for(let x = 0; x < apiData.length; x++){
            for(let z = 0; z < apiData.length; z++){
                if(apiData[x].alpha3Code === borders[z]){
                    renderBorderMarkup(apiData[x]);
                    allArea.push({
                        name : apiData[x].name,
                        flag : apiData[x].flag,
                        area : apiData[x].area,
                        population : apiData[x].population
                    });
                }
            }
        }
        const neiHeadLine = `<h2>Total <em>${borders.length}</em> country found in your neighborhood</h2>`;
        viewNeighbor.insertAdjacentHTML("beforebegin" , neiHeadLine);
        allArea.push(countryData);
        allArea.sort((a,b)=> b.population - a.population).forEach( (elm , i) => {
            if(elm.name === srchQuery) renderIndexText(i , sortState)
            renderList(elm, i, query);
        });
    });
}


// render markup
function renderMarkup(data) {
    const markUp = `<div class="country__box">
                    <div class="country__img">
                        <img class="img-fluid" src="${data.flag}" alt="">
                    </div>
                    <ul class="country__stats">
                        <li><p>&#127758; Name</p><p>${data.name} (${data.nativeName})</p></li>
                        <li><p>&#127963;&#65039; Capital</p> <p>${data.capital}</p> </li>
                        <li><p>&#128104;&zwj;&#128105;&zwj;&#128102; Population</p> <p>${(data.population / 1000000).toFixed(2)} Million</p></li>
                        <li><p>&#128510; Area</p> <p>${new Intl.NumberFormat('en-IN').format(data.area)} km<sup>2</sup></p></li>
                        <li><p>&#128483;&#65039; Language</p> <p>${data.languages[0].name}</p></li>
                        <li><p>&#128176; Currency</p> <p>${data.currencies[0].name}</p></li>
                        <li><p>&#128506;&#65039; Region</p> <p>${data.region}</p></li>
                    </ul>
                </div>`;

        return viewResult.insertAdjacentHTML('beforeend' , markUp)
}
// render Borders
function renderBorderMarkup(data) {
    const bordermarkUp = `<div class="country__box neighbor__box">
                    <div class="country__img">
                        <img class="img-fluid" src="${data.flag}" alt="">
                    </div>
                    <h3>${data.name}</h3>
                </div>`;

        return viewNeighbor.insertAdjacentHTML('beforeend' , bordermarkUp)
}
// render List 
function renderList(listItem , idx , qr) {
    const listMarkup =`<li class=${listItem.name === qr ? "list__current" : ""}>
                        <p>${idx + 1 === 1? (idx + 1) + "st" : idx + 1 === 2? (idx + 1) + "nd" : idx + 1 === 3 ? (idx + 1) + "rd" : (idx + 1) + "th"}</p>
                        <p><img src="${listItem.flag}" alt="${listItem.name}" class="img-fluid">${listItem.name}</p>
                        <p>${(listItem.population / 1000000).toFixed(2)} million</p>
                        <p>${new Intl.NumberFormat('en-IN').format(listItem.area)} <span>km<sup>2</sup></span></p>
                    </li>`;

            rankList.insertAdjacentHTML("beforeend" , listMarkup);
}
// Render Index stat 
function renderIndexText (idx , prm) {
    const indexText = `<h3>Your country rank <em>${idx + 1 === 1? (idx + 1) + "st" : idx + 1 === 2? (idx + 1) + "nd" : idx + 1 === 3 ? (idx + 1) + "rd" : (idx + 1) + "th"}</em> by ${ prm ? "area" : "population"}.</h3>`;
    return rankList.insertAdjacentHTML("beforebegin" , indexText);
}
// String Formation
function formatStr(str) {
    const char1 =  str.toLowerCase().charAt(0).toUpperCase();
    const charRest = str.toLowerCase().slice(1);
    return char1.concat(charRest);
}


//=============  AL events  =====================
window.addEventListener("load", function(){
     async function initialCall () {
        const loadApi = await fetch("https://restcountries.eu/rest/v2/all");
        return await loadApi.json();
    }
    initialCall().then( res => {
        res.forEach(arr => {
            allCountry.push(arr.name);
        })
    })
})

window.addEventListener("keydown" , function(e){
    // srchQuery = formatStr(searchInput.value)
    if(e.key === "Enter") {
        mainBox.classList.add("view")
        callData(srchQuery)
    };
})

searchInput.addEventListener("input" , function () {
    // srchQuery = formatStr(searchInput.value);
    srchQuery = searchInput.value;
    const regValue = new RegExp(`^${this.value}` , 'ig');
    searchData.innerHTML= "";
    allCountry.forEach( country => {
        if(regValue.test(country)) {
            searchData.insertAdjacentHTML("beforeend" , `<option value="${country}">`);
        };
    })
})

searchBtn.addEventListener("click" , function(e){
    e.preventDefault();
    mainBox.classList.add("view")
    callData(srchQuery);
})
btnGrp.forEach( elm => {
    elm.addEventListener("click" , (e)=> {
        btnGrp.forEach( elm => {
            elm.classList.remove("btn-def");
            elm.removeAttribute("disabled")
        });
        e.target.classList.add("btn-def");
        elm.setAttribute("disabled" , "true")
        sortState = !sortState;
        rankList.innerHTML = `<li class="rank__list--header"><P>Rank</P><P>Name</P><P>Population</P><P>Area</P></li>`;
        if(document.querySelector(".nei__heading + h3")) document.querySelector(".nei__heading + h3").remove();
        sortState ? allArea.sort((a,b)=> b.area - a.area).forEach( (elm , i) => {
            if(elm.name === srchQuery) renderIndexText (i , sortState);
            renderList(elm, i, srchQuery);
        }) : allArea.sort((a,b)=> b.population - a.population).forEach( (elm , i) => {
            if(elm.name === srchQuery) renderIndexText (i , sortState);
            renderList(elm, i, srchQuery)
        })
    })
})

document.querySelector(".btn-rank").addEventListener("click" , ()=> {
    document.querySelector("#rankList").style.opacity = 1;
})
