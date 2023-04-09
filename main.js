const navli = document.querySelectorAll('.nav-li');
let nav = [...navli];

nav.forEach((value)=>{
    value.addEventListener('click',function(e){
        for(let i = 0;i < nav.length;i++){
            nav[i].classList.remove('active')
        }

        this.classList.add('active')
    })
})


const burger = document.querySelector('.burger');
const firstLine = document.querySelector('.line1');
const secondLine = document.querySelector('.line2');
const thirdLine = document.querySelector('.line3');
const burgerContent = document.querySelector('.burgerContent');


burger.addEventListener('click',function(){
    burger.classList.toggle('burgChange')
    firstLine.classList.toggle('burgerActiveFirst');
    secondLine.classList.toggle('burgerActiveSecond');
    thirdLine.classList.toggle('burgerActiveThird');
    burgerContent.classList.toggle('burgerContentActive')
})

const burgerLi = document.querySelectorAll('.burger-li');
const burgerLis = [...burgerLi];

burgerLis.forEach((value)=>{
    value.addEventListener('click',function(e){
        for(let i = 0;i < burgerLis.length;i++){
            burgerLis[i].classList.remove('active')
        }

        this.classList.add('active')
    })
})

const header = document.querySelector('.header');

window.addEventListener('scroll',function(){
    let x = window.scrollY;
    if(x >= 350){
        header.classList.add('fixed')
    }
})



// for shop

const global = document.querySelector('.glob');
const leftArrow = document.querySelector('.fa-arrow-left');
const rightArrow = document.querySelector('.fa-arrow-right');

leftArrow?.addEventListener('click',function(){
    global.scrollTo({
        left:-1000,
        behavior:'smooth'
    })
})

rightArrow?.addEventListener('click',function(){
    global.scrollTo({
        left:1000,
        behavior:'smooth'
    })
})


