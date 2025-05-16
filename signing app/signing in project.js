const create = document.getElementById(`creat`);
const sign = document.getElementById(`signin`);
const div2 = document.getElementById(`second-box`);
const div1 = document.getElementById(`first-box`);
const btn2 = document.querySelectorAll(`.btn2`);
const msg = document.getElementById(`message`);

create.addEventListener("mousedown", (x)=>{
    if (x.button === 0)
        {    div2.classList.remove(`second-box-c`);
            div2.classList.add(`second-box-transition`);
            div1.classList.remove(`first-box-c`);
    div1.classList.add(`first-box-transition`);
    document.body.style.backgroundColor = `hsl(143, 52.10%, 32.00%)`;
    document.getElementById(`inp1`).style.visibility =`hidden`;
    document.getElementById(`password1`).style.visibility =`hidden`;
    document.getElementById(`sign`).style.visibility =`hidden`;
    document.getElementById(`creat`).style.visibility =`hidden`;
    document.getElementById(`t1`).style.visibility =`hidden`;
    document.getElementById(`inp2`).style.visibility =`visible`;
    document.getElementById(`password2`).style.visibility =`visible`;
    document.getElementById(`signin`).style.visibility =`visible`;
    document.getElementById(`createit`).style.visibility =`visible`;
    document.getElementById(`t2`).style.visibility =`visible`;
    document.querySelectorAll('.btn2').forEach(x =>{
        x.classList.remove(`btn2`);
        x.classList.add(`btn`);
    })
    msg.classList.add(`message`)
    setTimeout(()=>{
        msg.classList.remove(`message`);
        msg.textContent = `Hello New User`;
    },500)}
});
sign.addEventListener("mousedown",(x)=>{
    if (x.button === 0)
        {    div2.classList.remove(`second-box-transition`);    
            div2.classList.add(`second-box-c`);
            div1.classList.remove(`first-box-transition`);
            div1.classList.add(`first-box-c`);
    document.getElementById(`inp2`).style.visibility =`hidden`;
    document.getElementById(`password2`).style.visibility =`hidden`;
    document.getElementById(`signin`).style.visibility =`hidden`;
    document.getElementById(`createit`).style.visibility =`hidden`;
    document.getElementById(`t2`).style.visibility =`hidden`;
    document.getElementById(`inp1`).style.visibility =`visible`;
    document.getElementById(`password1`).style.visibility =`visible`;
    document.getElementById(`sign`).style.visibility =`visible`;
    document.getElementById(`creat`).style.visibility =`visible`;
    document.getElementById(`t1`).style.visibility =`visible`;
    document.body.style.backgroundColor = `hsl(0, 0%, 70%)`;
    document.querySelectorAll('.btn2').forEach(x =>{
        x.classList.remove(`btn`);
        x.classList.add(`btn2`);
    })
    msg.classList.add(`message`)
    setTimeout(()=>{
        msg.classList.remove(`message`);
        msg.textContent = `Welcom Back`;
    },500)}
})
document.getElementById(`creat-submit`).addEventListener(`submit`,async (e)=>{
    e.preventDefault();
    const username = document.getElementById(`inp2`).value;
    const password = document.getElementById(`password2`).value;
    const responce = await fetch(`/submit`,{
        method: `POST`,
        headers:{'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})
    })
    window.location.href = `/submit?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
})