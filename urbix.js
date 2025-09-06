function theme() {
  let element = document.body;
  let button = document.getElementById("themeToggle");  
  element.classList.toggle("dark-mode");
}

function toggleSettings() {
  document.getElementById("settingsSidebar").classList.toggle("open");
  document.getElementById("settingsOverlay").classList.toggle("show");
}

function ontheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("darkModeSwitch").checked = document.body.classList.contains("dark-mode");
}

function setLayout(direction) {
  document.documentElement.setAttribute("dir", direction);
  toggleSettings();
}
function setLayoutStyle(style) {
  document.body.classList.remove("semi", "horizontal", "vertical");
  document.body.classList.add(style);
  toggleSettings();
}

