const body = document.getElementById("template");

body.innerHTML = `
  <header class="bg-dark text-center text-white" id="template-header">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Challenge #06
    </div>
    <div class="container p-4 pb-0">
      <section class="pb-4">
        <p>Eai, beleza?</br>Aqui vão alguns Challenges feitos por Marlon Melchiades, com JavaScript puro!</br>Foi muito divertido fazer eles! </br> Esse é o #06 de #10. Veja e se divirta também! (vai que você ache algo útil aqui pra você!) ㋡</p>
      </section>
    </div>
  </header>
  ` +
  '<main class="container" id="template-main">' +
    "<section>" + cardStep51 + "</section>" +
    "<section>" + cardStep52 + "</section>" +
    "<section>" + cardStep53 + "</section>" +
    "<section>" + cardStep54 + "</section>" +
    "<section>" + cardStep55 + "</section>" +
    "<section>" + cardStep56 + "</section>" +
    "<section>" + cardStep57 + "</section>" +
    "<section>" + cardStep58 + "</section>" +
    "<section>" + cardStep59 + "</section>" +
    "<section>" + cardStep60 + "</section>" +
  '</main>'+`
  <footer style="margin-top: 25px;" class="bg-dark text-center text-white" id="template-footer">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/marlonendjr" role="button">
          <i class="bi bi-twitter"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://api.whatsapp.com/send?phone=+55(11)953459207&text=sua%20mensagem" role="button">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/marlon-melchiades/" role="button">
          <i class="bi bi-linkedin"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/MarlonMelchiades" role="button">
          <i class="bi-github" role="img" aria-label="GitHub"></i>
        </a>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      <i class="bi bi-envelope"></i> marlonendrigosilva@gmail.com
    </div>
  </footer>
`;


