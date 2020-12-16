'use strict';

let switchButton 			= document.querySelector('.switch-button');
let switchBtnRight 			= document.querySelector('.switch-button-case.right');
let switchBtnLeft 			= document.querySelector('.switch-button-case.left');
let activeSwitch 			= document.querySelector('.active');

function switchLeft(){
    switchBtnRight.classList.remove('active-case');
    switchBtnLeft.classList.add('active-case');
    activeSwitch.style.left 						= '0%';
}

function switchRight(){
    switchBtnRight.classList.add('active-case');
    switchBtnLeft.classList.remove('active-case');
    activeSwitch.style.left 						= '50%';
}

switchBtnLeft.addEventListener('click', function(){
    switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
    switchRight();
}, false);

