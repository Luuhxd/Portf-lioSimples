// Efeito de digitação
const text = "Desenvolvedor Web Front-End";
let i = 0;

function digitar() {
  if (i < text.length) {
    document.getElementById("subtitulo").innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}
window.onload = digitar;

// Efeito de rolagem (scroll reveal)
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".revelar");
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;
    if (posicao < alturaJanela - 100) {
      el.classList.add("visivel");
    }
  });
});

// Alternar tema claro/escuro
function alternarTema() {
  document.body.classList.toggle("dark");
}
