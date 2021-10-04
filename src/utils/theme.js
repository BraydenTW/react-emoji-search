function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

function keepTheme() {
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme')
    setTheme(theme)
  }
  else {
    const doesUserPreferDarkMode = window.matchMedia([
      '(prefers-color-scheme: dark)',
    ]).matches

    if (doesUserPreferDarkMode) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
}

module.exports = {
  setTheme,
  keepTheme
}