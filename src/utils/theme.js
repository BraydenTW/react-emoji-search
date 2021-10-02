function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

function keepTheme() {
  if(localStorage.getItem('theme')) {
    let theme = localStorage.getItem('theme')
    setTheme(theme)
  }
  else {
    setTheme('light')
  }
}

module.exports = {
  setTheme,
  keepTheme
}