const express = require(`express`);
const path = require(`path`);

const server = express();

server.use(express.static(path.join(__dirname,`src`)));
server.use(express.static(path.join(__dirname,`signing app`)));
server.use(express.static(path.join(__dirname,`stopwatch`)));
server.use(express.static(path.join(__dirname,`calc`)));

server.get(`/`,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,`index.html`))
})

server.get(`/project1`,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,`signing in project.html`))
})
server.get(`/project2`,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,`third sep.html`))
})

server.get(`/project3`,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,`calculator.html`))
})

server.listen(5000,()=>{
    console.log(`the server is running`);
    
});