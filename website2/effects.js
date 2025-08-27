// effects.js: Adds dynamic background (particle effect)
document.addEventListener("DOMContentLoaded", function(){
    const body = document.querySelector('.dynamic-bg');
    // Example: simple animated stars
    for(let i=0; i<60; i++){
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random()*100 + '%';
        star.style.left = Math.random()*100 + '%';
        star.style.animationDuration = (2 + Math.random()*8) + 's';
        body.appendChild(star);
    }
});