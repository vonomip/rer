let clickCount = 0;
const potato = document.getElementById('potato');
const message = document.getElementById('message');

potato.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 10) {
        message.textContent = 'Ты победил!';
    }
});
