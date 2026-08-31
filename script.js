function handleButtonEscape(e) {
    const password = document.getElementById("passwordInput").value;
    const btn = document.getElementById("loginBtn");
    
    // Only escape if they typed something and it's wrong
    if (password.length > 0 && password.toLowerCase() !== "vivvai") {
        if (e && e.type === "touchstart") {
            e.preventDefault(); 
        }
        
        // Calculate random position
        const maxMoveX = Math.min(window.innerWidth * 0.35, 150);
        const maxMoveY = Math.min(window.innerHeight * 0.25, 150);
        
        const randomX = (Math.random() - 0.5) * maxMoveX * 2;
        const randomY = (Math.random() - 0.5) * maxMoveY * 2;
        
        btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        document.getElementById("error").innerHTML = "Wrong Password! Penalty: You owe Vaishnavi one extra hug next time you see her! 🤗 Try again!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pwdInput = document.getElementById("passwordInput");
    if(pwdInput) {
        pwdInput.addEventListener("input", () => {
            const btn = document.getElementById("loginBtn");
            if(btn) btn.style.transform = "translate(0px, 0px)";
            document.getElementById("error").innerHTML = "";
        });
    }
});

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password.toLowerCase() === "vivvai"){

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
            p1.scrollIntoView({ behavior: "smooth", block: "end" });
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
                        p2.scrollIntoView({ behavior: "smooth", block: "end" });
                        setTimeout(typeWriter2, 130);
                    } else {
                        p2.classList.remove("typing");
                    }
                }
                typeWriter2();
            }, 600); // Pause between paragraphs
        }
    }
    
    // Start after a 10-second delay to allow the user to read the top quote
    setTimeout(typeWriter1, 10000);
}

let isScanning = false;
let scanTimer1, scanTimer2, finaleTimer;

function startPress(e) {
    if(isScanning) return;
    if(e && e.preventDefault) {
        // Prevent default behavior like scrolling or magnifying glass on iOS
        // Only call on touch events if needed, but pointer events are fine
    }
    
    const scanner = document.getElementById('bioScanner');
    const status = document.getElementById('bioStatus');
    
    scanner.classList.add('scanning');
    status.innerText = "Scanning... (Keep holding)";
    
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
    
    scanTimer1 = setTimeout(() => {
        status.innerText = "Analyzing Identity... (Hold still)";
        if(navigator.vibrate) navigator.vibrate([50, 50]);
    }, 1500);
    
    scanTimer2 = setTimeout(() => {
        isScanning = true; 
        status.innerText = "Identity Confirmed: Birthday Boy 👑";
        status.style.color = "#4ade80";
        scanner.style.borderColor = "#4ade80";
        scanner.style.boxShadow = "0 0 20px rgba(74, 222, 128, 0.5)";
        
        if(navigator.vibrate) navigator.vibrate([100, 100, 200]);
        
        finaleTimer = setTimeout(() => {
            triggerSparkleBurst();
        }, 1200);
    }, 3000);
}

function endPress(e) {
    if(isScanning) return; // If already confirmed, don't interrupt
    
    clearTimeout(scanTimer1);
    clearTimeout(scanTimer2);
    
    const scanner = document.getElementById('bioScanner');
    const status = document.getElementById('bioStatus');
    
    scanner.classList.remove('scanning');
    status.innerText = "Scan incomplete. Please press and hold.";
    
    setTimeout(() => {
        if(!scanner.classList.contains('scanning') && !isScanning) {
            status.innerText = "Awaiting the Birthday Boy's fingerprint...";
        }
    }, 2000);
}

function triggerSparkleBurst() {
    if(navigator.vibrate) navigator.vibrate([100, 50, 200, 100, 300]);
    
    const finale = document.getElementById('sparkleFinale');
    const content = document.getElementById('finaleContent');
    const finalMsg = document.getElementById('finalMessage');
    
    // Hide scanner and text
    if(content) content.style.display = 'none';
    
    // Create massive burst of particles
    const emojis = ['✨', '💖', '🎉', '🌟', '👑'];
    
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
        if(finalMsg) {
            finalMsg.style.display = 'block';
            setTimeout(() => finalMsg.classList.add('revealed'), 50);
        }
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

// Cinematic Gallery Focus
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery img');
    if(galleryItems.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove focused class from all others
                galleryItems.forEach(img => img.classList.remove('focused'));
                // Add focused class to the one in the center
                entry.target.classList.add('focused');
            }
        });
    }, {
        root: document.querySelector('.gallery'),
        threshold: 0.5,
        rootMargin: "0px -20% 0px -20%"
    });

    galleryItems.forEach(item => observer.observe(item));
});

// Fallback if script loads after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    const galleryItems = document.querySelectorAll('.gallery img');
    if(galleryItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    galleryItems.forEach(img => img.classList.remove('focused'));
                    entry.target.classList.add('focused');
                }
            });
        }, {
            root: document.querySelector('.gallery'),
            threshold: 0.5,
            rootMargin: "0px -20% 0px -20%"
        });
        galleryItems.forEach(item => observer.observe(item));
    }
}

// Live Time Together Counter
function updateLiveCounter() {
    const startDate = new Date("April 16, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = now - startDate;

    if (difference > 0) {
        // Calculate time
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);

        const yEl = document.getElementById("t-years");
        if(yEl) {
            yEl.innerText = years;
            
            // Hide the years box if it's 0
            if(years === 0) {
                yEl.parentElement.style.display = 'none';
            } else {
                yEl.parentElement.style.display = 'flex';
                // Smart pluralization: "Year" vs "Years"
                const label = yEl.nextElementSibling;
                if(label) label.innerText = years === 1 ? 'Year' : 'Years';
            }

            document.getElementById("t-days").innerText = days;
            document.getElementById("t-hours").innerText = hours;
            document.getElementById("t-mins").innerText = mins;
            document.getElementById("t-secs").innerText = secs;
        }
    }
}

// Start the timer
document.addEventListener('DOMContentLoaded', () => {
    updateLiveCounter();
    setInterval(updateLiveCounter, 1000);
});

// Fallback if loaded late
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    updateLiveCounter();
    if(!window.timerStarted) {
        setInterval(updateLiveCounter, 1000);
        window.timerStarted = true;
    }
}

// --- FIREBASE DYNAMIC GALLERY LOGIC ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Only initialize if keys are added
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const storage = firebase.storage();

    // 1. Load existing photos from Firestore
    db.collection("photos").orderBy("timestamp", "asc").onSnapshot((snapshot) => {
        const container = document.getElementById('galleryContainer');
        const addContainer = document.querySelector('.add-photo-container');
        
        // Clear all dynamically added images first to prevent duplicates
        document.querySelectorAll('.dynamic-photo').forEach(el => el.remove());

        snapshot.forEach((doc) => {
            const data = doc.data();
            const img = document.createElement('img');
            img.src = data.url;
            img.className = 'dynamic-photo';
            img.alt = "Memory";
            container.insertBefore(img, addContainer);
        });
    });

    // 2. Handle Upload
    const addBtn = document.getElementById('addPhotoBtn');
    const fileInput = document.getElementById('photoUploadInput');

    if(addBtn && fileInput) {
        addBtn.addEventListener('click', () => {
            const password = prompt("Enter the secret password to upload:");
            if (password === "Vivvai") { // Password check
                fileInput.click();
            } else if (password !== null) {
                alert("Incorrect password!");
            }
        });

        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            addBtn.innerText = "Uploading... ⏳";
            addBtn.disabled = true;

            try {
                // Upload to Storage
                const storageRef = storage.ref();
                const fileRef = storageRef.child("memories/" + Date.now() + "_" + file.name);
                await fileRef.put(file);
                
                // Get URL
                const downloadURL = await fileRef.getDownloadURL();

                // Save to Firestore
                await db.collection("photos").add({
                    url: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                addBtn.innerText = "Add Photo 📸";
                addBtn.disabled = false;
            } catch (error) {
                console.error("Upload failed", error);
                alert("Upload failed. Make sure your Firebase Security Rules allow reads/writes!");
                addBtn.innerText = "Add Photo 📸";
                addBtn.disabled = false;
            }
        });
    }
}
