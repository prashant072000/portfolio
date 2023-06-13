const words = ['Web Developer', 'Programmer'];
let current = 0;
let currword = '';

function type(){
    if(current >= words.length){
        current = 0;
    }

    currword = words[current];
    current ++;

    const typingAnimation = document.querySelector('.typing-animation');
    typingAnimation.textContent = currword;
    setTimeout(erase, 4000);
}

function erase(){
    const typingAnimation = document.querySelector('.typing-animation');
    const wordlength = currword.length;

    if(wordlength > 0){
        currword = currword.slice(0, wordlength-1);
        typingAnimation.textContent = currword;
        setTimeout(erase,150);
    }else{
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', type);