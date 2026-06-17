window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{
document.body.style.transition="1.5s";
document.body.style.opacity="1";
},100);

});
