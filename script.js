function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "2710"){

document.getElementById("passwordScreen").style.display="none";

document.getElementById("birthdayPage").style.display="flex";
  startBirthdayAnimation();
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
function openLetter(element) {
    element.classList.toggle('open');
}

let holdTimer;
let isHolding = false;

function startHeartbeat() {
    isHolding = true;
    const heart = document.getElementById("giantHeart");
    const msg = document.getElementById("heartbeatMessage");
    
    heart.classList.add("beating");
    msg.classList.remove("revealed");
    
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]); // Initial heartbeat pulse
    
    holdTimer = setTimeout(() => {
        if(isHolding) {
            triggerMagic();
        }
    }, 1500); // Hold for 1.5 seconds to reveal
}

function stopHeartbeat() {
    isHolding = false;
    clearTimeout(holdTimer);
    document.getElementById("giantHeart").classList.remove("beating");
}

function triggerMagic() {
    if(navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]); // Magic success vibration
    
    // Spawn tiny hearts burst quickly
    for(let i=0; i<15; i++) {
        setTimeout(createHeart, i * 80);
    }
    
    // Reveal message
    const msg = document.getElementById("heartbeatMessage");
    msg.innerHTML = "Every time your heart beats, just know mine is beating for you too. ❤️";
    msg.classList.add("revealed");
    
    document.getElementById("giantHeart").classList.remove("beating");
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

startTypewriter(); // Trigger the typewriter effect
}
function startBirthdayAnimation(){

const first=document.getElementById("birthdayText1");
const second=document.getElementById("birthdayText2");
const third=document.getElementById("birthdayText3");

first.classList.add("active");

setTimeout(()=>{

first.classList.remove("active");

second.classList.add("active");

},3000);

setTimeout(()=>{

second.classList.remove("active");

third.classList.add("active");

},6500);

}

function startTypewriter() {
    const p1 = document.getElementById("typewriter1");
    const p2 = document.getElementById("typewriter2");
    
    if (!p1 || !p2) return;
    
    const text1 = p1.getAttribute("data-text");
    const text2 = p2.getAttribute("data-text");
    
    p1.innerHTML = "";
    p2.innerHTML = "";
    
    p1.classList.add("typing");

    let i = 0;
    function typeWriter1() {
        if (i < text1.length) {
            p1.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, 45); // Adjust typing speed here
        } else {
            p1.classList.remove("typing");
            p2.classList.add("typing");
            setTimeout(() => {
                let j = 0;
                function typeWriter2() {
                    if (j < text2.length) {
                        p2.innerHTML += text2.charAt(j);
                        j++;
                        setTimeout(typeWriter2, 45);
                    }
                }
                typeWriter2();
            }, 600); // Pause between paragraphs
        }
    }
    
    // Start after a slight delay so the page transitions smoothly first
    setTimeout(typeWriter1, 800);
}

function triggerFinale() {
    const star = document.getElementById('theStar');
    const title = document.getElementById('finaleTitle');
    
    star.classList.add('shooting');
    
    if(navigator.vibrate) navigator.vibrate([100, 50, 100]); // Magic pulse
    
    setTimeout(() => {
        star.style.display = 'none';
        document.getElementById('theLocket').style.display = 'flex';
        title.innerHTML = "I kept the best part for last...<br><span style='font-size:0.55em; color:#d1bfae; font-weight:normal; font-family:sans-serif; text-shadow:none;'>Tap the locket to open</span>";
    }, 1000);
}

function openLocket() {
    document.querySelector('.locket').classList.toggle('open');
    document.getElementById('finaleMessage').classList.toggle('show');
    if(navigator.vibrate) navigator.vibrate(50);
}

function initScratchCard() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill the canvas with a silver foil
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text "Scratch Here"
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch Here 🪙', canvas.width/2, canvas.height/2);

    let isDrawing = false;

    function getMousePos(evt) {
        const rect = canvas.getBoundingClientRect();
        const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
        const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
        
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function scratch(evt) {
        if (!isDrawing) return;
        if (evt.cancelable) evt.preventDefault(); // Prevent scrolling on mobile while scratching
        
        const pos = getMousePos(evt);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2); // Eraser brush size
        ctx.fill();
    }

    // Mouse events
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratch);
    
    // Touch events
    canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, {passive: false});
    canvas.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratch, {passive: false});
}

document.addEventListener('DOMContentLoaded', initScratchCard);
// Fallback if script loads after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initScratchCard();
}
