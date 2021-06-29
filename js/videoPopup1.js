const button1 = document.querySelector(".vidBtn1");
const cross1 = document.querySelector(".cross1");
const trailer1 = document.querySelector(".videoPopup1");
                       
button1.addEventListener('click', ()=>{
    trailer1.classList.add('myClass');
    console.log("Hello");
    });

cross1.addEventListener(('click'), ()=>{
    trailer1.classList.remove('myClass');
    console.log("Bye");
    });                
                       