const content = document.getElementById(`input`);
const nums= document.querySelectorAll(`.nums`);
const opx = document.querySelectorAll(`.oprationsx`);
const history = document.getElementById(`historya`);

nums.forEach(value => {
    value.addEventListener("mousedown", (event)=>{
        if(event.button === 0){
            const m = Number(event.target.textContent);
            content.value += m;
        }
    })
})

opx.forEach(value =>{
    value.addEventListener("mousedown",(event)=>{
        if(event.button === 0){
            content.value += event.target.id;
        }
    })
})
function AC(){
    content.value = ``;
}
function power(){
    const x = eval(content.value);
    const v = Math.pow(x,2);
    content.value = v;
    adding(v);
    history.classList.add(`display`);
}

function squareroot(){
    const x = eval(content.value);
    const v = Math.sqrt(x);
    content.value = v;
    adding(v); 
    history.classList.add(`display`); 
}
function equel(){
    const x = eval(content.value);
    content.value = x;
    adding(x);
    history.classList.add(`display`);
}

function adding(v){
    document.getElementById(`historya`).innerHTML += `<tr><td>${v}</td></tr>`;
}