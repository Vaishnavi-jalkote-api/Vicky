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

    // Wait 3s, then fade out the first text
    setTimeout(()=>{
        first.classList.remove("active");
        
        // Wait 1.5s for the fade out to finish, then fade in the second text
        setTimeout(()=>{
            second.classList.add("active");
            
            // Wait 3s, then fade out the second text
            setTimeout(()=>{
                second.classList.remove("active");
                
                // Wait 1.5s for fade out, then fade in the third text
                setTimeout(()=>{
                    third.classList.add("active");
                }, 1500);
                
            }, 3000);
            
        }, 1500);
        
    }, 3000);
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
            setTimeout(typeWriter1, 130); // Slower typing speed for readability
        } else {
            p1.classList.remove("typing");
            p2.classList.add("typing");
            setTimeout(() => {
                let j = 0;
                function typeWriter2() {
                    if (j < text2.length) {
                        p2.innerHTML += text2.charAt(j);
                        j++;
                        setTimeout(typeWriter2, 130);
                    }
                }
                typeWriter2();
            }, 600); // Pause between paragraphs
        }
    }
    
    // Start after a 10-second delay to allow the user to read the top quote
    setTimeout(typeWriter1, 10000);
}

let sparkleTimer;
let isSparkleHolding = false;

function startSparkleHold() {
    isSparkleHolding = true;
    const btn = document.getElementById('sparkleButton');
    if(btn) btn.classList.add('holding');
    
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]); 
    
    sparkleTimer = setTimeout(() => {
        if(isSparkleHolding) {
            triggerSparkleBurst();
        }
    }, 1500); // 1.5 seconds hold
}

function stopSparkleHold() {
    isSparkleHolding = false;
    clearTimeout(sparkleTimer);
    const btn = document.getElementById('sparkleButton');
    if(btn) btn.classList.remove('holding');
}

function triggerSparkleBurst() {
    if(navigator.vibrate) navigator.vibrate([100, 50, 200, 100, 300]);
    
    const finale = document.getElementById('sparkleFinale');
    const content = document.getElementById('finaleContent');
    const finalMsg = document.getElementById('finalMessage');
    
    // Hide button and text
    if(content) content.style.display = 'none';
    
    // Create massive burst of particles
    const emojis = ['✨', '🦋', '💖', '⭐', '🌸'];
    
    for(let i=0; i<60; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random trajectory
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 100; // 100 to 400px
            p.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            p.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            p.style.setProperty('--rot', `${Math.random() * 360}deg`);
            
            p.style.left = '50%';
            p.style.top = '50%';
            p.style.fontSize = `${Math.random() * 20 + 15}px`;
            
            if(finale) finale.appendChild(p);
            
            // Cleanup
            setTimeout(() => p.remove(), 3000);
        }, i * 30); // Stagger the creation
    }
    
    // Show final message
    setTimeout(() => {
        if(finalMsg) finalMsg.style.display = 'block';
    }, 1200);
}

function initScratchCard() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill the canvas with a warm, aesthetic rose-gold/beige foil to match the website
    ctx.fillStyle = '#e3c6a8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text "Scratch here for surprise"
    ctx.font = 'bold 18px "Georgia", serif';
    ctx.fillStyle = '#8b5a2b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch here for surprise', canvas.width/2, canvas.height/2);

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

// Dynamic "Don't Leave Me" Browser Tab Title
let originalTitle = document.title;
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        document.title = "Come back! 🥺";
    } else {
        document.title = originalTitle;
    }
});

// Scrolling Tab Title
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[data-tab-title]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                originalTitle = entry.target.getAttribute('data-tab-title');
                if (document.visibilityState === "visible") {
                    document.title = originalTitle;
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of section is visible

    sections.forEach(sec => observer.observe(sec));
});

// Falling Petals / Sparkles Animation
function createPetals() {
    const container = document.getElementById('petals-container');
    if(!container) return;
    
    // We use soft romantic emojis
    const elements = ['🌸', '✨', '💖', '🌸', '✨']; 
    
    // Create a new petal every 1000ms (1 second) to keep it subtle and premium
    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.innerText = elements[Math.floor(Math.random() * elements.length)];
        
        // Random horizontal position across the screen width
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Random fall duration between 12s and 22s (very slow and gentle)
        const duration = Math.random() * 10 + 12;
        petal.style.animationDuration = duration + 's';
        
        // Random size (some big, some small for depth)
        petal.style.fontSize = (Math.random() * 12 + 10) + 'px';
        
        container.appendChild(petal);
        
        // Remove the petal after it finishes falling to prevent slowing down his phone
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
        
    }, 1000);
}

// Start petals as soon as the page loads
document.addEventListener('DOMContentLoaded', createPetals);
// Fallback if script loads after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    createPetals();
}
