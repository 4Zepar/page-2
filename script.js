let menuButton = document.querySelector(".menu");
let menu = document.querySelector(".sidenav");
let closeMenuButton = document.querySelector(".button-close");

let zeroScale = () => menuButton.style.transform = 'scale(1)';

const toggleMenu = (isOpen) => {
    menuButton.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    menuButton.style.transform = isOpen ? 'scale(1.05)' : 'scale(1)';
};

menuButton.addEventListener('mouseover', () => toggleMenu(true));
menuButton.addEventListener('mouseout', () => toggleMenu(false));

menuButton.addEventListener('click', () => {
    toggleMenu(true);
    setTimeout(zeroScale, 200);
});

const toggleContentMenu = (isOpen) => {
    menu.style.transform = isOpen ? 'translateX(0%)' : 'translateX(-105%)';
    closeMenuButton.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(-90deg)';
    closeMenuButton.style.scale = isOpen ? '1' : '0';
};

menuButton.addEventListener('click', () => toggleContentMenu(true));
closeMenuButton.addEventListener('click', () => toggleContentMenu(false));






document.querySelector(".play-button").addEventListener('click', (e) => {
    let video = document.querySelector("video");
    
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// function playVideo() {
//     let preview = document.querySelector(".video-preview");
//     let video = document.querySelector("#video");

//     preview.style.display = "none"; // Скрываем обложку
//     video.style.display = "block"; // Показываем видео
//     video.play(); // Запускаем видео
// }