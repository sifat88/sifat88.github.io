const mnuBtn = document.querySelector(".navbar-toggler-icon");
const openButton = mnuBtn.childNodes[0];
const closeButton = mnuBtn.childNodes[02];

const mnuFunc = () => {
    if( closeButton.style.display === ""){
        closeButton.style.display = "block";
        openButton.style.display = "none";
        console.log(closeButton.style.display)
    } else {
        openButton.style.display = "block";
        closeButton.style.display = "";
    }
    
}

mnuBtn.addEventListener("click", mnuFunc);