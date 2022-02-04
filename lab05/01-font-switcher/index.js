let fontSize = 1.4
const makeBigger = () => {
   fontSize += 0.2;
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
};

const makeSmaller = () => {
   fontSize -= 0.2;
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
