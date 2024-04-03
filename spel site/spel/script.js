const canvas = document.getElementById("agarCanvas");
const ctx = canvas.getContext("2d");

// Spelerinformatie
const player = {
    x: 600,
    y: 400,
    radius: 30,
    color: "#3498db",
    targetX: 600,
    targetY: 400
};

// Array voor eetbaar voedsel
const foods = [];
const maxFood = 100;

// Variabele om de status bij te houden
let gameRunning = true;

// Luister naar muisbewegingen om het doel van de speler in te stellen
canvas.addEventListener("mousemove", setTargetPosition);

// Tekenen van de speler op het canvas
function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Tekenen van voedsel op het canvas
function drawFood(food) {
    ctx.beginPath();
    ctx.arc(food.x, food.y, food.radius, 0, Math.PI * 2);
    ctx.fillStyle = food.color;
    ctx.fill();
    ctx.closePath();
}

// Genereren van nieuw voedsel
function generateFood() {
    if (foods.length < maxFood) {
        const food = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 15,
            color: getRandomColor()
        };
        foods.push(food);
    }
}

// Instellen van het doel van de speler op basis van de muispositie
function setTargetPosition(event) {
    player.targetX = event.clientX - canvas.getBoundingClientRect().left;
    player.targetY = event.clientY - canvas.getBoundingClientRect().top;
}

// Bewegen van de speler naar zijn doel
function movePlayer() {
    const dx = player.targetX - player.x;
    const dy = player.targetY - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 3) {
        player.x += (dx / distance) * 3;
        player.y += (dy / distance) * 3;
    }
}

// Functie om een willekeurige kleur te krijgen
function getRandomColor() {
    const colors = ["#e74c3c", "#27ae60", "#f1c40f", "#9b59b6"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Hoofd gameloop-functie
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    generateFood();

    for (let i = 0; i < foods.length; i++) {
        drawFood(foods[i]);

        const dx = player.x - foods[i].x;
        const dy = player.y - foods[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + foods[i].radius) {
            player.radius += 1;
            foods.splice(i, 1);
            i--;
        }
    }

    movePlayer();
    if (gameRunning) {
        requestAnimationFrame(gameLoop);
    }
}

// Start het spel wanneer het script wordt geladen
gameLoop();