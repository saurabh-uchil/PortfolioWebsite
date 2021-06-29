const button3 = document.querySelector(".vidBtn3");
const cross3 = document.querySelector(".cross3");
const trailer3 = document.querySelector(".videoPopup3");


button3.addEventListener('click', ()=>{
    trailer3.classList.add('myClass');
    console.log("Hello");
    });

cross3.addEventListener(('click'), ()=>{
    trailer3.classList.remove('myClass');
    console.log("Bye");
    });