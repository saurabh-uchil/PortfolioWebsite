const button2 = document.querySelector(".vidBtn2");
const cross2 = document.querySelector(".cross2");
const trailer2 = document.querySelector(".videoPopup2");


button2.addEventListener('click', ()=>{
    trailer2.classList.add('myClass');
    console.log("Hello");
    });

cross2.addEventListener(('click'), ()=>{
    trailer2.classList.remove('myClass');
    console.log("Bye");
    });