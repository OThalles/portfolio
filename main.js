ScrollReveal({ reset: false });
ScrollReveal().reveal('.container-items-top', { delay: 400 });
ScrollReveal().reveal('.container-mid', { delay: 400 });
ScrollReveal().reveal('.container-items-bottom', { delay: 400 });


'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter,i) => {
        setTimeout(() => (el.innerHTML += letter), 95 * i);
    })
}

let helloElement = document.querySelector('.title-1');
let myNameElement = document.querySelector('.title-3');

typeWriter(helloElement)
typeWriter(myNameElement)


const menuIds = {
    "contato": "contatobotao",
    "sobre": "sobrebotao",
    "habilidades": "habilidadesbotao",
    "projetos": "projetosbotao",
    "form": "formbotao"
}

let itemsmenu = Object.keys(menuIds)

itemsmenu.forEach((item) =>{
    document.getElementById(menuIds[item]).addEventListener('click',function() {
        document.getElementById(item).scrollIntoView({
            behavior: 'smooth'
        });
        
    })
})


document.querySelectorAll('#contatobotao').forEach(item=>{
    item.addEventListener('click',function() {
        document.getElementById('contato').scrollIntoView({
            behavior: 'smooth'
        });
})

})

document.querySelectorAll(".tech").forEach(e=> {
    e.addEventListener('mouseover', function(){
        e.classList.toggle("reverse")
    })
})

document.querySelectorAll(".contact-item a").forEach(e=> {
    e.addEventListener('mouseover', function(){
        e.classList.toggle("reverse")
    })
})