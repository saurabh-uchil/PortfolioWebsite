
const button4 = document.querySelector(".vidBtn4");
const cross4 = document.querySelector(".cross");
const trailer4 = document.querySelector(".videoPopup");


button4.addEventListener('click', ()=>{
    trailer4.classList.add('myClass');
    console.log("Hello");
    });

cross4.addEventListener(('click'), ()=>{
    trailer4.classList.remove('myClass');
    console.log("Bye");
    });