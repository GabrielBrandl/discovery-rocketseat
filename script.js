function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img= document.querySelector("#profile img")

  const alt = document.querySelector("#profile img")


  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')

    alt.setAttribute('alt', 'só um teste')
  } else {
    img.setAttribute('src', './assets/avatar.png')

    alt.setAttribute('alt', 'Foto do Mayk Brito sorrindo, usando oculos e camisa preta, barba e um fundo amarelo')
  }
}