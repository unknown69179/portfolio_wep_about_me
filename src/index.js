const Switch = document.getElementById(`switch`);
const switchbody = document.getElementById(`light_mode`);
const container = document.getElementById(`container`);
const dropdown = document.getElementById(`drop_down_minue`);
const topics = document.querySelectorAll(`.topics1`);
const menue = document.getElementById(`minue`);
const container2 = document.getElementById(`container2`);
const homepage = document.createElement(`h1`);
const homepage2 = document.createElement(`h3`);
const homepage3 = document.createElement(`h5`);
const aboutpage = document.createElement(`h1`);
const aboutpage2 = document.createElement(`h1`);
const aboutpage3 = document.createElement(`h1`);
const aboutpage4 = document.createElement(`h1`);
const skill = document.createElement(`h1`);
const project = document.createElement(`div`);
const project2 = document.createElement(`div`);
const project3 = document.createElement(`div`);
const a1 = document.createElement(`a`);
const a2 = document.createElement(`a`);
const teligram = document.createElement(`img`);
const instgram = document.createElement(`img`);
const pevents = document.querySelectorAll(`.project`);
const img1 = document.createElement(`img`);
const img2 = document.createElement(`img`);
const img3 = document.createElement(`img`);
const pm1 = document.createElement(`p`);
const pm2 = document.createElement(`p`);
const pm3 = document.createElement(`p`);

    teligram.src=`TEL.jpeg`;
    instgram.src=`insta.jpeg`;

    a1.appendChild(teligram);
    a2.appendChild(instgram);

    a1.classList.add(`project`);
    teligram.style.borderRadius = `5px`;
    a1.style.transition = `filter 0.5s,transform 0.25s, background-color 0.25s, box-shadow 0.5s`;
    a1.style.width = `200px`;
    a1.style.height = `200px`;
    teligram.style.width = `200px`;
    teligram.style.height = `200px`;

    a2.classList.add(`project`);
    instgram.style.borderRadius = `5px`;
    a2.style.transition = `filter 0.5s,transform 0.25s, background-color 0.25s, box-shadow 0.5s`;
    a2.style.width = `200px`;
    a2.style.height = `200px`;
    instgram.style.width = `200px`;
    instgram.style.height = `190px`;

    project.id = `a1`;
    project2.id = `a2`;
    project3.id = `a3`;

    project.appendChild(img1);
    project.appendChild(pm1);
    project.classList.add(`project`);
    project.style.transition = `filter 0.5s,transform 0.25s, background-color 0.25s, box-shadow 0.5s`;
    project.style.width = `200px`;
    project.style.height = `200px`;
    img1.src = `login in.jpg`;
    img1.style.height = `200px`;
    img1.style.width = `200px`;
    img1.style.borderRadius = `5px`;

    project2.appendChild(img2);
    project2.appendChild(pm2);
    project2.classList.add(`project`);
    project2.style.transition = `filter 0.5s,transform 0.25s, background-color 0.25s, box-shadow 0.5s`;
    project2.style.width = `200px`;
    project2.style.height = `200px`;
    img2.src = `watch.png`;
    img2.style.height = `200px`;
    img2.style.width = `200px`;
    img2.style.borderRadius = `5px`;
    
    project3.appendChild(img3);
    project3.appendChild(pm3);
    project3.classList.add(`project`);
    project3.style.transition = `filter 0.5s,transform 0.25s, background-color 0.25s, box-shadow 0.5s`;
    project3.style.width = `200px`;
    project3.style.height = `200px`;
    img3.src = `calc.png`;
    img3.style.height = `200px`;
    img3.style.width = `200px`;
    img3.style.borderRadius = `5px`;

    skill.textContent = `for now front end + back end and smooth transitions with simple animations in front end in the future there will be more`;

    aboutpage.textContent = `name : Abd Al-Rahman Imad Saeed`;
    aboutpage2.textContent = `work : wep devaloper`;
    aboutpage3.textContent = `study : at northern technical university`;
    aboutpage4.textContent = `hobbies : chess drawing sport and coding`;

    homepage.textContent = `welcome to my wepsite`;
    homepage2.textContent = `here you can find some informations about me`;
    homepage3.textContent = `choose the topic that you want to know about me from the menu bar in the top right`;

function home(){
    container2.innerHTML = ``;
    homepage.style.transition = `filter 0.5s`;
    homepage.style.fontSize = `6em`;
    homepage2.style.fontSize = `3em`;
    homepage3.style.fontSize = `1.5em`;
    homepage2.style.transition = `filter 0.5s`;
    homepage3.style.transition = `filter 0.5s`;
    homepage.classList.add(`blury`);
    homepage2.classList.add(`blury`);
    homepage3.classList.add(`blury`);
    container2.appendChild(homepage);
    container2.appendChild(homepage2);
    container2.appendChild(homepage3);
    setTimeout(()=>{
        homepage.classList.remove(`blury`);
        homepage2.classList.remove(`blury`);
        homepage3.classList.remove(`blury`);
    },500)
}

function about(){
    container2.innerHTML = ``;
    aboutpage.style.fontSize = `3em`;
    aboutpage2.style.fontSize = `3em`;
    aboutpage3.style.fontSize = `3em`;
    aboutpage4.style.fontSize = `3em`;

    aboutpage.style.transition = `filter 0.5s`;
    aboutpage2.style.transition = `filter 0.5s`;
    aboutpage3.style.transition = `filter 0.5s`;
    aboutpage4.style.transition = `filter 0.5s`;

    aboutpage.classList.add(`blury`);
    aboutpage2.classList.add(`blury`);
    aboutpage3.classList.add(`blury`);
    aboutpage4.classList.add(`blury`);

    container2.appendChild(aboutpage);
    container2.appendChild(aboutpage2);
    container2.appendChild(aboutpage3);
    container2.appendChild(aboutpage4);

    setTimeout(()=>{

        aboutpage.classList.remove(`blury`);
        aboutpage2.classList.remove(`blury`);
        aboutpage3.classList.remove(`blury`);
        aboutpage4.classList.remove(`blury`);
    },500)
}

function skills(){
    container2.innerHTML = ``;
    skill.style.transition = `filter 0.75s`;
    skill.classList.add(`blury`);
    container2.appendChild(skill);
    setTimeout(()=>{
    skill.classList.remove(`blury`);    
    })
}

function projects(){
    container2.innerHTML = ``;
    project.classList.add(`blury`);
    project2.classList.add(`blury`);
    project3.classList.add(`blury`);
    container2.appendChild(project);
    container2.appendChild(project2);
    container2.appendChild(project3);

        [project, project2, project3].forEach((x) => {
        x.addEventListener('click', (event) => {
            const id = x.id;
            switch (id) {
                case `a1`:
                    window.location.href = `/project1`;
                    break;
                case `a2`:
                    window.location.href = `/project2`;
                    break;
                case `a3`:
                    window.location.href = `/project3`;
                    break;
            }
        });

        x.addEventListener('mouseover', () => {
            switch (x.id) {
                case `a1`:
                    pm1.textContent = `signing in app`;
                    break;
                case `a2`:
                    pm2.textContent = `stop watch app`;
                    break;
                case `a3`:
                    pm3.textContent = `calculator`;
                    break;
            }
        });

        x.addEventListener('mouseout', () => {
            pm1.textContent = ``;
            pm2.textContent = ``;
            pm3.textContent = ``;
        });
    });

    setTimeout(()=>{
    project.classList.remove(`blury`);        
    project2.classList.remove(`blury`);        
    project3.classList.remove(`blury`);        
    },500)
}

function links(){
    container2.innerHTML = ``;
    a2.href=`https://www.instagram.com/abd_alrhman_kalali`;
    a1.href=`http://t.me/abd_alrahman_imad`;
    a1.classList.add(`blury`);
    a2.classList.add(`blury`);
    container2.appendChild(a1);
    container2.appendChild(a2);
    setTimeout(()=>{
        a1.classList.remove(`blury`);
        a2.classList.remove(`blury`);
    },500)
    

}

home();

Switch.addEventListener(`click`,(x)=>{
    if (x.button === 0){
        if (Switch.classList.contains(`light`)){
            Switch.classList.remove(`light`);
            Switch.classList.add(`dark`);
            document.body.style.backgroundColor = `black`;
            container.style.backgroundColor = ` hsl(0, 0%, 20%)`;
            container.style.boxShadow = `0px 0px 15px white`;
            topics.forEach((x)=>{
                x.classList.remove(`topics1`);
                x.classList.add(`topics2`);
            })
            homepage.style.color = `white`;
            homepage2.style.color = `white`;
            homepage3.style.color = `white`;
            aboutpage.style.color = `white`;
            aboutpage2.style.color = `white`;
            aboutpage3.style.color = `white`;
            aboutpage4.style.color = `white`;
            skill.style.color = `white`;
            container2.style.backgroundColor = ` hsl(0, 0%, 40%)`;
        }
        else if(Switch.classList.contains(`dark`)){
            Switch.classList.remove(`dark`);
            Switch.classList.add(`light`);
            document.body.style.backgroundColor = `white`;
            container.style.backgroundColor = ` hsl(0, 0%, 90%)`;
            container.style.boxShadow = `0px 0px 30px black`;
            topics.forEach((x)=>{
                x.classList.remove(`topics2`);
                x.classList.add(`topics1`);
            })
            homepage.style.color = `black`;
            homepage2.style.color = `black`;
            homepage3.style.color = `black`;
            aboutpage.style.color = `black`;
            aboutpage2.style.color = `black`;
            aboutpage3.style.color = `black`;
            aboutpage4.style.color = `black`;
            skill.style.color = `black`;
            container2.style.backgroundColor = ` hsl(0, 0%, 70%)`;
        }
    }
}) 

document.addEventListener(`click`,(event)=>{
    if (dropdown.contains(event.target)){
        dropdown.classList.add(`disapear`);
        menue.classList.remove(`invis`);
    }
    else if(!dropdown.contains(event.target)){
        dropdown.classList.remove(`disapear`);
        menue.classList.add(`invis`);
    }
})
pevents.forEach((x)=>{
    x.addEventListener(`click`,(event)=>{
        if(event.button === 0){
            const id = x.id;
            switch (id) {
                case `a1`:
                    window.location.href = `/project1`;
                    break;
                    case `a2`:
                        window.location.href = `/project2`;
                        break;
                        case `a3`:
                            window.location.href = `/project3`;
                            break;
                default:
                    break;
            }
        }
    })


})
topics.forEach((x)=>{
    x.addEventListener(`click`,(event)=>{
        if(event.button === 0){
            const index = x.id;
            switch (index) {
                case `home`:
                    home();
                    break;
                    case `about`:
                        about();
                        break;
                        case `skills`:
                            skills();
                            break;
                            case `projects`:
                                projects();
                                break;
                                case `links`:
                                    links();
                                    break;
            
                default:
                    break;
            }
        }
    })
})