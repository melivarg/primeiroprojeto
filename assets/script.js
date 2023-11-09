function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logoroxo.png")
    img.setAttribute("alt","Um desenho de gato contornado por branco, com fundo roxo, escrito A Humana Dos Gatos em marrom e roxo claro")
    img.setAttribute("alt","Um desenho de gato contornado por rosa, com fundo branco, escrito A Humana Dos Gatos em marrom e rosa escuro")
  } else {
    img.setAttribute("src", "./assets/branquinho.png")
  }
}
