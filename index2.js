const target = document.getElementById('target');
const display = document.getElementById('score');
let score = 0;
let timeLeft = 10; // секунд на гру

// Рух мішені
const moveTarget = () => {
    target.style.left = Math.random() * (window.innerWidth - 60) + 'px';
    target.style.top = Math.random() * (window.innerHeight - 60) + 'px';
};

const interval = setInterval(() => {
    moveTarget();
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(interval);
        target.remove();
        alert(`Гру закінчено! Ваш результат: ${score} очок.`);
    }
}, 1000);

target.addEventListener('click', () => {
    score++;
    display.textContent = score;
    moveTarget();
});


let seconds = prompt("Введіть час у секундах : D");
seconds = Number(seconds);
if (isNaN(seconds) || seconds <= 0) {
    alert("Будь ласка, введіть коректне число більше 0!!!");
} else {
    alert(`Таймер запущено на ${seconds} секунд...`);
    setTimeout(() => {
        alert("Час вийшов! ; 3");
    }, seconds * 1000);
}
