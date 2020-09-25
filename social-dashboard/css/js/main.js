const themePlaceMent = document.querySelector('.main-content');
const darkMode = document.getElementById('themeButton');

const themeSwitcher = elem => elem.classList.toggle('dark-mode');

darkMode.addEventListener('click' , themeSwitcher(themePlaceMent) );