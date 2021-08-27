// ----- Algumas informações fixas variáveis ----- //

let inputParte4step51 =
  '</p> <div class="input-group mt-1 mb-3"><span class="input-group-text">R$</span><input id="numero-step' +
  numeroStep51 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="' +
  textoInputStep51 +
  '" aria-label="number"></input></div><button onclick="incrementClickStep51()" id="botao-step';

let inputParte4step52 =
  '</p> <input id="numero-step' +
  numeroStep52 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control mb-3" placeholder="' +
  textoInputStep52 +
  '" aria-label="number"></input> <button onclick="incrementClickStep52()"id="botao-step';

let inputParte4step53 =
  '</p> <input id="numero-step' +
  numeroStep53 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control mb-1" placeholder="' +
  textoInputStep53 +
  '" aria-label="number"></input>' +
  `<select id="genero-step` +
  numeroStep53 +
  `" class="form-select mb-3" aria-label="select Gênero">
    <option selected disabled>Gênero</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>` +
  '<button onclick="incrementClickStep53()"id="botao-step';

let inputParte4step54 =
  "</p>" +
  '<div class="input-group mb-3">' +
  '<input id="n1-step' +
  numeroStep54 +
  '" type="text" onkeyup="somenteNumerosStep54(this);" class="form-control" placeholder="Peso" aria-label="number">' +
  '<input id="n2-step' +
  numeroStep54 +
  '" type="text" onkeyup="somenteNumerosStep54(this);" class="form-control" placeholder="Altura" aria-label="number">' +
  "</div>" +
  '<button onclick="incrementClickStep54()" id="botao-step';

let inputParte4step55 =
  "</p>" +
  '<div class="input-group mb-3">' +
  '<input id="n1-step' +
  numeroStep55 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="Início" aria-label="number">' +
  '<button onclick="incrementClickStep55()" id="botao-step';

let inputParte4step56 =
  '</p><input id="n1-step' +
  numeroStep56 +
  '" type="text" onkeyup="somenteNumerosStep56(this);" class="form-control" placeholder="' +
  textoInputStep56 +
  '" aria-label="number">' +
  '<span id="text-response-step';

let inputParte4step57 =
  '</p><div class="input-group mt-1 mb-1"><span class="input-group-text">R$</span><input id="numero-step' +
  numeroStep57 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control" placeholder="' +
  textoInputStep57 +
  '" aria-label="number"></input></div>' +
  `<select id="genero-step` +
  numeroStep57 +
  `" class="form-select mb-3" aria-label="select Gênero">
    <option selected disabled>Gênero</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>` +
  '<button onclick="incrementClickStep57()"id="botao-step';

let parte6Step57 =
  '</button><span id="botao-FinalizarStep57"></span>' +
  '<span id="text-response-step';

let inputParte4step58 =
  '</p> <input id="numero-step' +
  numeroStep58 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control mb-3" placeholder="' +
  textoInputStep58 +
  '" aria-label="number"></input> <button onclick="incrementClickStep58()" id="botao-step';

let parte6Step58 =
  '</button><span id="botao-FinalizarStep58"></span>' +
  '<span id="text-response-step';

let inputParte4step59 =
  '</p><input id="numero-step' +
  numeroStep59 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control mb-1" placeholder="' +
  textoInputStep59 +
  '" aria-label="number"></input>' +
  `<select id="genero-step` +
  numeroStep59 +
  `" class="form-select mb-3" aria-label="select Gênero">
    <option selected disabled>Gênero</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>` +
  '<button onclick="incrementClickStep59()"id="botao-step';

let parte6Step59 =
  '</button><span id="botao-FinalizarStep59"></span>' +
  '<span id="text-response-step';

let inputParte4step60 =
  '</p><input id="nome-step' +
  numeroStep60 +
  '" type="text" class="form-control mb-1" placeholder="' +
  textoInput1Step60 +
  '" aria-label="nome"></input>' +
  '<input id="numero-step' +
  numeroStep60 +
  '" type="text" onkeyup="somenteNumeros(this);" class="form-control mb-1" placeholder="' +
  textoInput2Step60 +
  '" aria-label="number"></input>' +
  `<select id="genero-step` +
  numeroStep60 +
  `" class="form-select mb-3" aria-label="select Gênero">
    <option selected disabled>Gênero</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>` +
  '<button onclick="incrementClickStep60()"id="botao-step';

let parte6Step60 =
  '</button><span id="botao-FinalizarStep60"></span>' +
  '<span id="text-response-step';

// ----- Informações de dados e estrutura fixa ----- //

let parte1 =
  '<section style="margin-top: 25px;">' +
  '<div class="card text-center">' +
  '<div class="card-header">' +
  "step ";

let parte2 = "</div>" + '<div class="card-body">' + '<h5 class="card-title">';
let parte3 = "</h5>" + '<p class="card-text">';
let parte4 = '</p> <button id="botao-step';
let parte5 = '" class="btn btn-dark" type="button" id="button-addon2">';
let parte6 = "</button>" + '<span id="text-response-step';
let parte7 = '"></span>' + "</div>" + '<div class="card-footer text-muted">';
let parte8 = "</div>" + "</div>" + "</section>";

// ----- Estrutura dos dados ----- //

let cardStep51 =
  parte1 +
  numeroStep51 +
  parte2 +
  tituloStep51 +
  parte3 +
  textoStep51 +
  inputParte4step51 +
  numeroStep51 +
  parte5 +
  textoButtonStep51 +
  parte6 +
  numeroStep51 +
  parte7 +
  textoCardFooterStep51 +
  parte8;

let cardStep52 =
  parte1 +
  numeroStep52 +
  parte2 +
  tituloStep52 +
  parte3 +
  textoStep52 +
  inputParte4step52 +
  numeroStep52 +
  parte5 +
  textoButtonStep52 +
  parte6 +
  numeroStep52 +
  parte7 +
  textoCardFooterStep52 +
  parte8;

let cardStep53 =
  parte1 +
  numeroStep53 +
  parte2 +
  tituloStep53 +
  parte3 +
  textoStep53 +
  inputParte4step53 +
  numeroStep53 +
  parte5 +
  textoButtonStep53 +
  parte6 +
  numeroStep53 +
  parte7 +
  textoCardFooterStep53 +
  parte8;

let cardStep54 =
  parte1 +
  numeroStep54 +
  parte2 +
  tituloStep54 +
  parte3 +
  textoStep54 +
  inputParte4step54 +
  numeroStep54 +
  parte5 +
  textoButtonStep54 +
  parte6 +
  numeroStep54 +
  parte7 +
  textoCardFooterStep54 +
  parte8;

let cardStep55 =
  parte1 +
  numeroStep55 +
  parte2 +
  tituloStep55 +
  parte3 +
  textoStep55 +
  inputParte4step55 +
  numeroStep55 +
  parte5 +
  textoButtonStep55 +
  "</div>" +
  parte6 +
  numeroStep55 +
  parte7 +
  textoCardFooterStep55 +
  parte8;

let cardStep56 =
  parte1 +
  numeroStep56 +
  parte2 +
  tituloStep56 +
  parte3 +
  textoStep56 +
  inputParte4step56 +
  numeroStep56 +
  parte7 +
  textoCardFooterStep56 +
  parte8;

let cardStep57 =
  parte1 +
  numeroStep57 +
  parte2 +
  tituloStep57 +
  parte3 +
  textoStep57 +
  inputParte4step57 +
  numeroStep57 +
  parte5 +
  textoButtonStep57 +
  parte6Step57 +
  numeroStep57 +
  parte7 +
  textoCardFooterStep57 +
  parte8;

let cardStep58 =
  parte1 +
  numeroStep58 +
  parte2 +
  tituloStep58 +
  parte3 +
  textoStep58 +
  inputParte4step58 +
  numeroStep58 +
  parte5 +
  textoButtonStep58 +
  parte6Step58 +
  numeroStep58 +
  parte7 +
  textoCardFooterStep58 +
  parte8;

let cardStep59 =
  parte1 +
  numeroStep59 +
  parte2 +
  tituloStep59 +
  parte3 +
  textoStep59 +
  inputParte4step59 +
  numeroStep59 +
  parte5 +
  textoButtonStep59 +
  parte6Step59 +
  numeroStep59 +
  parte7 +
  textoCardFooterStep59 +
  parte8;

let cardStep60 =
  parte1 +
  numeroStep60 +
  parte2 +
  tituloStep60 +
  parte3 +
  textoStep60 +
  inputParte4step60 +
  numeroStep60 +
  parte5 +
  textoButtonStep60 +
  parte6Step60 +
  numeroStep60 +
  parte7 +
  textoCardFooterStep60 +
  parte8;
