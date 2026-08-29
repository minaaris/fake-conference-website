const clock = document.getElementById("clock");
const tick = function(){
    const date = new Date();
    let hour = date.getHours();
    let minute = String(date.getMinutes()).padStart(2,'0');
    const amPM = hour >= 12 ? 'PM' : 'AM'; hour = hour % 12 || 12;
    clock.textContent = `${hour}:${minute} ${amPM}`;
};
tick(); setInterval(tick, 10000);