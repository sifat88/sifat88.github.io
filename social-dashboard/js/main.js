const themePlaceMent = document.querySelector('.main-content');
const darkMode = document.getElementById('themeButton');

const themeSwitcher = () => themePlaceMent.classList.toggle('dark-mode');

darkMode.addEventListener('click' , themeSwitcher);