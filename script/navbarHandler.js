'use strict'

const menuButton=document.querySelector('.menu-button');
const menuCloseButton=document.querySelector('.menu-close');
const navBar=document.querySelector('.index-nav-res-container');

menuButton.addEventListener("click", function(){
    console.log("Clicked")
    menuButton.classList.add('hidden');
    menuCloseButton.classList.remove('hidden');
    navBar.classList.remove('hidden');
});

menuCloseButton.addEventListener("click", function(){
    console.log("Clicked")
    menuCloseButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
    navBar.classList.add('hidden');
});

