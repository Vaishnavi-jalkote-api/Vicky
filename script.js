function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "2710"){

document.getElementById("passwordScreen").style.display="none";

document.getElementById("birthdayPage").style.display="flex";
  setTimeout(() => {
window.scrollTo({
top: 0,
left: 0,
behavior: "instant"
});
}, 100);
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

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart-float");
const hearts=["💖","💕","💗","💓"];
heart.innerHTML=
hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+15)+"px";

heart.style.animationDuration=
(Math.random()*5+8)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},12000);

}

setInterval(createHeart,800);
function openWebsite(){

document.getElementById("birthdayPage").style.display="none";

document.getElementById("mainContent").style.display="block";

window.scrollTo(0,0);

}
