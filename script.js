const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let currentYear = new Date().getFullYear();
let footerYear = document.getElementById("footer-year");
footerYear.innerHTML = currentYear;

//start pop-up//

document.getElementById("openModalBtn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.getElementById("openModalBtn").addEventListener("click", function() {
  // Ação a ser executada quando o botão for clicado
  console.log("Botão clicado!");
  // Adicione aqui o código para abrir o pop-up ou realizar qualquer outra ação desejada
});


//start conteúdo escondido//

var textoVisivel = false; // Flag para rastrear a visibilidade do texto

// Função para alternar a visibilidade do texto e a rotação da seta
function alternarTexto() {
  var elementoTexto = document.getElementById("texto");
  var elementoSeta = document.getElementById("seta");
  
  if (textoVisivel) {
    elementoTexto.style.display = "none";
    elementoSeta.classList.remove("rotacionada");
    textoVisivel = false;
  } else {
    elementoTexto.style.display = "block";
    elementoSeta.classList.add("rotacionada");
    textoVisivel = true;
  }
}


function togglePDF() {
  var pdfContainer = document.getElementById("pdfContainer");
  
  if (pdfContainer.style.display === "none") {
    pdfContainer.style.display = "flex";
  } else {
    pdfContainer.style.display = "none";
  }
}
