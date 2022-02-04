/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeThemeOcean = () => {
   document.querySelector("body").className = "ocean"
}

const changeThemeDesert = () => {
   document.querySelector("body").className = "desert"
}

const changeThemeHigh = () => {
   document.querySelector("body").className = "high-contrast"
}

const changeThemeDefault = () => {
   document.querySelector("body").className = ""
}

document.querySelector("#ocean").addEventListener('click',changeThemeOcean);
document.querySelector("#desert").addEventListener('click',changeThemeDesert);
document.querySelector("#high-contrast").addEventListener('click',changeThemeHigh);
document.querySelector("#default").addEventListener('click',changeThemeDefault);
