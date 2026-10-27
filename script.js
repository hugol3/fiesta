function hideAllScreens() {
  const screens = ['screen1', 'screen2', 'screen3', 'section1', 'section2', 'section3', 'section4'];
  screens.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
}

function rejected() {
  hideAllScreens();
  document.getElementById('screen2').classList.remove('hidden');
}

function goToMenu() {
  hideAllScreens();
  document.getElementById('screen3').classList.remove('hidden');
}

function openSection(sectionId) {
  hideAllScreens();
  document.getElementById(sectionId).classList.remove('hidden');
}

function backToPrincipal() {
  hideAllScreens();
  document.getElementById('screen1').classList.remove('hidden');
}

function backToMenu() {
  goToMenu();
}