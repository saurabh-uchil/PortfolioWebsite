const button = document.querySelector(".vidBtn");
const close = document.querySelector(".close");
const trailer = document.querySelector(".trailer");


button.addEventListener('click', ()=>{
    trailer.classList.add('myClass');
    console.log("Hello");
    });

close.addEventListener(('click'), ()=>{
    trailer.classList.remove('myClass');
    console.log("Bye");
    });