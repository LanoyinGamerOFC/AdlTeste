
const translations = {
  'pt-BR': {
    home: 'Principal',
    games: 'Jogos',
    projects: 'Projetos',
    about: 'Sobre',
    contact: 'Contato',
    videos: 'Vídeos',
    account: 'Conta (em breve)',
    welcome: 'Bem-vindo ao AdlGames Studio'
  },
  'en': {
    home: 'Home',
    games: 'Games',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    videos: 'Videos',
    account: 'Account (soon)',
    welcome: 'Welcome to AdlGames Studio'
  }
};

let currentLang = navigator.language.startsWith('pt') ? 'pt-BR' : 'en';

function setLanguage(lang){
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.innerText = translations[lang][key] || key;
  });
}

function toggleTheme(){
  document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded',()=>{
  setLanguage(currentLang);
});
