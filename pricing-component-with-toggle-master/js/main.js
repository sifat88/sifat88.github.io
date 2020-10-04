const switchButton = document.getElementById("switchButton");
const getClass = document.querySelector(".package-items");



const btnFunc = () => {
    getClass.classList.toggle("show-price")
}

switchButton.addEventListener("click", btnFunc);