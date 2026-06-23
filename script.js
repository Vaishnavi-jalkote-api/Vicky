function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "Emandi"){

document.getElementById("passwordScreen").style.display="none";

document.getElementById("mainContent").style.display="block";

}
else{

document.getElementById("error").innerHTML =
"Wrong password ❤️";

}

}
function toggleMessage(id){

const msg=document.getElementById(id);

if(msg.style.display==="block"){
msg.style.display="none";
}
else{
msg.style.display="block";
}

}

const messages=[

"Someone is very proud of you ❤️",

"Thank you for making me smile.",

"You are loved more than you know.",

"A certain girl is thinking about you right now ❤️",

"Your smile is one of my favourite things.",

"Life feels brighter with you in it."

];

function showMessage(){

const random=
messages[Math.floor(Math.random()*messages.length)];

document.getElementById("randomMessage").innerHTML=random;

}

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(Math.random()*15+15)+"px";

petal.style.animationDuration=
(Math.random()*5+8)+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(createPetal,1000);
