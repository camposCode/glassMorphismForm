let form = document.getElementById("form");

form.addEventListener("mousemove", (e) => {
    
    let x = (window.innerWidth /2 - e.pageX) / 12;
    let y = (window.innerHeight / 1 - e.pageY) / 12;

    form.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
});

form.addEventListener('mouseleave', function(){
    form.style.transform = 'rotateX(0deg) rotateY(0deg)';
});