const display = document.getElementById(`number`);
let timer = null;
let starttime = 0;
let elipsetime = 0;
let isrunning = false;

function start(){

    if (!isrunning){
        starttime = Date.now() - elipsetime;
        timer = setInterval(ubdate,10)
        isrunning = true
    }
}
function reset(){
    clearInterval(timer);
     starttime = 0;
     elipsetime = 0;
     isrunning = false;
     display.textContent = `${`00`}:${`00`}:${`00`}:${`00`}`;
}
function stop(){
    if (isrunning){
    clearInterval(timer)
    isrunning = false
    }
}
function ubdate(){
    const currenttime = Date.now();
    elipsetime = currenttime - starttime;

    let hours = Math.floor(elipsetime  /(1000 * 60 *60));
    let minuts = Math.floor(elipsetime  /(1000 * 60 )%60);
    let seconds = Math.floor(elipsetime  /(1000) % 60);
    let miliseconds = Math.floor(elipsetime  %1000/10);
    
    hours=String(hours).padStart(2,`0`);
    minuts=String(minuts).padStart(2,`0`);
    seconds=String(seconds).padStart(2,`0`);
    miliseconds=String(miliseconds).padStart(2,`0`);
    display.textContent = `${hours}:${minuts}:${seconds}:${miliseconds}`;

}