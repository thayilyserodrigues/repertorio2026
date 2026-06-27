let pontos = 0;
let respondidas = 0;

/* BOTÃO - mensagem interativa */
function mostrarMensagem() {
  document.getElementById("mensagem").innerHTML =
    "🌱 A tecnologia no campo ajuda a economizar água e aumentar a produção!";
}

/* QUIZ */
function responder(correto) {
  if (correto) {
    pontos++;
  }

  respondidas++;

  if (respondidas === 3) {
    mostrarResultado();
  }
}

/* RESULTADO FINAL DO QUIZ */
function mostrarResultado() {
  let resultado = document.getElementById("resultado");

  if (pontos === 3) {
    resultado.innerHTML = "🏆 Perfeito! Você acertou tudo!";
  } 
  else if (pontos === 2) {
    resultado.innerHTML = "👍 Muito bom! Quase perfeito!";
  } 
  else if (pontos === 1) {
    resultado.innerHTML = "🌱 Bom! Continue aprendendo!";
  } 
  else {
    resultado.innerHTML = "📚 Tente novamente e aprenda mais!";
  }
}

/* INTERAÇÃO EXTRA - efeito no site */
document.addEventListener("DOMContentLoaded", function () {

  // mensagem de boas-vindas
  alert("Bem-vindo ao AGRINHO 2026 🌾");

  // efeito nos cards
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      card.style.background = "#e8f5e9";
      card.style.transition = "0.3s";
    });
  });

});
