function countImages() {
    const images = document.querySelectorAll('.image');
    let countElement = document.getElementById('count');
    countElement.textContent = images.length;
}


function getCurrentDateTime() {
    const now = new Date();
    const day = now.getDate().toString();
    const month = (now.getMonth() + 1).toString();
    const year = now.getFullYear();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const dateTimeString = `${day}.${month}.${year} ${hours}:${minutes}`;
    return dateTimeString;
}


window.onload = function () {
    countImages();
    const currentDateElement = document.getElementById('current-date');
    currentDateElement.textContent = getCurrentDateTime();
};