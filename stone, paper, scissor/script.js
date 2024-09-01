const HumanChoice = document.getElementById("hum");
var x=document.createElement("IMG");
var y=document.createElement("IMG");
let r=0;
let s=0;
function fun1()
{
r=1
x.setAttribute("src", "stone.jpeg");
x.setAttribute("width", "70");
x.setAttribute("height", "70");
x.setAttribute("alt", "stone");
HumanChoice.appendChild(x);
const computerChoice = document.getElementById("com");
let s=Math.floor(Math.random()*3)
if(s==1)
{
y.setAttribute("src", "stone.jpeg");
}
else if(s==2)
{
y.setAttribute("src", "paper.png");
}
else{
    s=3;
y.setAttribute("src", "scissor.jpeg");
}
y.setAttribute("width", "70");
y.setAttribute("height", "70");
y.setAttribute("alt", "The Pulpit Rock"); 
computerChoice.appendChild(y);
result(r,s);
}
function fun2()
{
r=2
x.setAttribute("src", "paper.png");
x.setAttribute("width", "70");
x.setAttribute("height", "70");
x.setAttribute("alt", "paper");
HumanChoice.appendChild(x);
const computerChoice = document.getElementById("com");
let s=Math.floor(Math.random()*3)
if(s==1)
{
y.setAttribute("src", "stone.jpeg");
}
else if(s==2)
{
y.setAttribute("src", "paper.png");
}
else{
    s=3;
y.setAttribute("src", "scissor.jpeg");
}
y.setAttribute("width", "70");
y.setAttribute("height", "70");
y.setAttribute("alt", "The Pulpit Rock"); 
computerChoice.appendChild(y);
result(r,s);
}
function fun3()
{
r=3
x.setAttribute("src", "scissor.jpeg");
x.setAttribute("width", "70");
x.setAttribute("height", "70");
x.setAttribute("alt", "scissor");
HumanChoice.appendChild(x);
const computerChoice = document.getElementById("com");
let s=Math.floor(Math.random()*3)
if(s==1)
{
y.setAttribute("src", "stone.jpeg");
}
else if(s==2)
{
y.setAttribute("src", "paper.png");
}
else{
    s=3;
y.setAttribute("src", "scissor.jpeg");
}
y.setAttribute("width", "70");
y.setAttribute("height", "70");
y.setAttribute("alt", "The Pulpit Rock"); 
computerChoice.appendChild(y);
result(r,s);
}
const res = document.getElementById("res"); 
function result(r,s)
{
if(s==r)
{
res.innerHTML="tie"
}
else if((s==1 && r==3)||(s==2 && r==1)||(s==3 && r==2))
{
res.innerHTML="computer won"
}
else if((s==3 && r==1)||(s==1 && r==2)||(s==2 && r==3))
{
    res.innerHTML="human won"
}
}
function rel()
{
    location.reload();
}