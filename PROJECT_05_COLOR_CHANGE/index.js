const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeColor = function() {
    document.body.style.backgroundColor = randomColor();
}

let show;
const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click',function(e) {
    if(!show){
        show = setInterval(changeColor,1000);
    }
})

stop.addEventListener('click',function(e) {
    clearInterval(show);
    show = null;
})