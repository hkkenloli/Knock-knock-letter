const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];
const numberOfPetals = 50;
const bluebellColor = 'rgba(17, 17, 98, 0.7)'; 

function createPetal() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 2 - canvas.height, 
        size: Math.random() * 5 + 3,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        sway: Math.random() * 2 - 1
    };
}

for (let i = 0; i < numberOfPetals; i++) {
    petals.push(createPetal());
}

function drawPetal(petal) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(162, 162, 208, ${petal.opacity})`;
    
    
    ctx.ellipse(petal.x, petal.y, petal.size, petal.size * 1.5, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
}

function updatePetals() {
    for (let i = 0; i < petals.length; i++) {
        let petal = petals[i];
        petal.y += petal.speed;
        petal.x += Math.sin(petal.y / 50) * petal.sway; 

        
        if (petal.y > canvas.height) {
            petals[i] = createPetal();
            petals[i].y = -20; 
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < petals.length; i++) {
        drawPetal(petals[i]);
    }
    updatePetals();
    requestAnimationFrame(animate);
}


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


animate();



const revealButton = document.getElementById('reveal-button');
const surpriseContent = document.getElementById('surprise-content');
const playlistSection = document.getElementById('playlist-section');
const readLetterButton = document.getElementById('read-letter-button');
const letterContent = document.getElementById('letter-content');


revealButton.addEventListener('click', () => {
    surpriseContent.style.display = 'block'; 
    revealButton.style.display = 'none'; 
    
    
    playlistSection.scrollIntoView({ behavior: 'smooth' });
});


readLetterButton.addEventListener('click', () => {
    letterContent.classList.toggle('open');
    if (letterContent.classList.contains('open')) {
        readLetterButton.textContent = 'Tutup Surat';
    } else {
        readLetterButton.textContent = 'Baca Surat';
    }
});