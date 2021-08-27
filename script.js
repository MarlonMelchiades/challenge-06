// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ----- code step 51 ----- //

const botaoStep51 = document.getElementById("botao-step51");
const inputNumeroStep51 = document.getElementById("numero-step51");
const textoResposta51 = document.getElementById("text-response-step51");
const valoresStep51 = [];

let counterValStep51 = 1;

function incrementClickStep51() {
  const clickStep51 = ++counterValStep51;
  botaoStep51.textContent =
    "Clique para confirmar o " + clickStep51 + "º valor";
  let numero = parseFloat(inputNumeroStep51.value);
  if (inputNumeroStep51.value.length === 0) {
    textoResposta51.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputNumeroStep51.setAttribute("disabled", "disabled");
    botaoStep51.textContent = "Reiniciar preços";
    botaoStep51.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  } else {
    valoresStep51.push(numero);
    inputNumeroStep51.value = "";
  }
  if (clickStep51 === 5) {
    botaoStep51.textContent = "Confirmar último valor";
  }
  if (clickStep51 === 6) {
    botaoStep51.textContent = "Mostrar preços";
    inputNumeroStep51.setAttribute("disabled", "disabled");
    botaoStep51.addEventListener("click", (e) => {
      e.preventDefault();
      Array.min = (valoresStep51) => {
        return Math.min.apply(Math, valoresStep51);
      };
      Array.max = (valoresStep51) => {
        return Math.max.apply(Math, valoresStep51);
      };
      let menorValor = Array.min(valoresStep51);
      let maiorValor = Array.max(valoresStep51);
      textoResposta51.innerHTML =
        '<p class="mt-3 mb-0">O menor preço é R$ ' +
        menorValor +
        ", e </br>o maior preço é R$ " +
        maiorValor +
        "!</p>";
    });
  }
  if (clickStep51 === 7) {
    botaoStep51.textContent = "Reiniciar preços";
    botaoStep51.addEventListener("click", (e) => {
      location.reload();
    });
  }
}

// ----- code step 52 ----- //

const botaoStep52 = document.getElementById("botao-step52");
const inputNumeroStep52 = document.getElementById("numero-step52");
const textoResposta52 = document.getElementById("text-response-step52");
const valoresStep52 = [];

let counterValStep52 = 1;

function incrementClickStep52() {
  const clickStep52 = ++counterValStep52;
  botaoStep52.textContent = "Confirme a " + clickStep52 + "ª idade";
  let numero = parseInt(inputNumeroStep52.value);
  if (inputNumeroStep52.value.length === 0) {
    textoResposta52.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputNumeroStep52.setAttribute("disabled", "disabled");
    botaoStep52.textContent = "Reiniciar idades";
    botaoStep52.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  } else {
    valoresStep52.push(numero);
    inputNumeroStep52.value = "";
  }
  if (clickStep52 === 10) {
    botaoStep52.textContent = "Confirmar última idade";
  }
  if (clickStep52 === 11) {
    botaoStep52.textContent = "Mostrar dados";
    inputNumeroStep52.setAttribute("disabled", "disabled");
    botaoStep52.addEventListener("click", (e) => {
      e.preventDefault();
      // media entre as idades //
      let soma = 0;
      for (let i = 0; i < valoresStep52.length; i++) {
        soma += valoresStep52[i];
      }
      let mediaIdades = soma / valoresStep52.length;
      // pessoas com mais de 18 anos e menos de 10 anos //
      let maioresDe18 = [];
      let menoresDe10 = [];
      for (let i = 0; i < valoresStep52.length; i++) {
        const element = valoresStep52[i];
        if (element > 18) {
          maioresDe18.push(element);
        } else if (element < 10) {
          menoresDe10.push(element);
        }
      }
      // pessoa mais velha //
      Array.max = (valoresStep52) => {
        return Math.max.apply(Math, valoresStep52);
      };
      let maiorIdade = Array.max(valoresStep52);
      // Mensagens de exibição //
      textoResposta52.innerHTML =
        '<p class="mt-3 mb-0">A média de idade é de ' +
        mediaIdades +
        " anos.</br>Tem " +
        maioresDe18.length +
        " pessoas acima de 18 anos, " +
        menoresDe10.length +
        " pessoas menores de 10 anos, e a pessoa mais velha tem " +
        maiorIdade +
        " anos!</p>";
    });
  }
  if (clickStep52 === 12) {
    botaoStep52.textContent = "Reiniciar idades";
    botaoStep52.addEventListener("click", (e) => {
      location.reload();
    });
  }
}

// ----- code step 53 ----- //

const botaoStep53 = document.getElementById("botao-step53");
const inputNumeroStep53 = document.getElementById("numero-step53");
const inputGeneroStep53 = document.getElementById("genero-step53");
const textoResposta53 = document.getElementById("text-response-step53");
const dadosStep53 = { idade: [], genero: [] };
const mulheresMaisDe20 = [];
let counterValStep53 = 1;

function incrementClickStep53() {
  const clickStep53 = ++counterValStep53;
  botaoStep53.textContent = "Confirme a " + clickStep53 + "ª idade";
  let numero = parseInt(inputNumeroStep53.value);
  let sexo = inputGeneroStep53.value;
  if (
    inputNumeroStep53.value.length === 0 ||
    inputGeneroStep53.value === "Gênero"
  ) {
    textoResposta53.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputNumeroStep53.setAttribute("disabled", "disabled");
    botaoStep53.textContent = "Reiniciar idades";
    botaoStep53.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  } else {
    dadosStep53.idade.push(numero);
    dadosStep53.genero.push(sexo);
    inputNumeroStep53.value = "";

    // condicional de quantas mulheres tem mais de 20 anos //
    if (sexo === "feminino" && numero > 20) {
      mulheresMaisDe20.push(numero);
    }
  }

  const dadosIdade = dadosStep53.idade;
  const dadosGenero = dadosStep53.genero;

  if (clickStep53 === 5) {
    botaoStep53.textContent = "Confirmar última idade";
  }
  if (clickStep53 === 6) {
    botaoStep53.textContent = "Mostrar dados";
    inputNumeroStep53.setAttribute("disabled", "disabled");
    botaoStep53.addEventListener("click", (e) => {
      e.preventDefault();
      // media entre as idades //
      let soma = 0;
      for (let i = 0; i < dadosIdade.length; i++) {
        soma += dadosIdade[i];
      }
      let mediaIdades = soma / dadosIdade.length;
      // condicional quantos homens e quantas mulheres //
      let masculino = [];
      let feminino = [];
      for (let i = 0; i < dadosGenero.length; i++) {
        const element = dadosGenero[i];
        if (element === "feminino") {
          feminino.push(element);
        } else if (element === "masculino") {
          masculino.push(element);
        }
      }
      // Mensagens de exibição //
      textoResposta53.innerHTML =
        '<p class="mt-3 mb-0">' +
        (masculino.length === 0
          ? "Nenhum homem foi cadastrado;</br>"
          : +masculino.length +
            " home" +
            (masculino.length === 1 ? "m " : "ns ") +
            "fo" +
            (masculino.length === 1 ? "i " : "ram ") +
            "cadastrado" +
            (masculino.length === 1 ? ";</br>" : "s;</br>")) +
        (feminino.length === 0
          ? "Nenhuma mulher foi cadastrada;</br>"
          : +feminino.length +
            " mulhe" +
            (feminino.length === 1 ? "r " : "res ") +
            "fo" +
            (feminino.length === 1 ? "i " : "ram ") +
            "cadastrada" +
            (feminino.length === 1 ? ";</br>" : "s;</br>")) +
        "A média da idade do grupo é de " +
        mediaIdades +
        " anos;</br>" +
        (mulheresMaisDe20.length === 1
          ? "Foi cadastrada apenas " +
            mulheresMaisDe20.length +
            " mulher acima dos 20 anos!"
          : "E foram cadastradas " +
            mulheresMaisDe20.length +
            " mulheres acima dos 20 anos!") +
        "</p>";
    });
  }
  if (clickStep53 === 7) {
    botaoStep53.textContent = "Reiniciar idades";
    botaoStep53.addEventListener("click", (e) => {
      location.reload();
    });
  }
}

// ----- code step 54 ----- //

const botaoStep54 = document.getElementById("botao-step54");
const inputPesoStep54 = document.getElementById("n1-step54");
const inputAlturaStep54 = document.getElementById("n2-step54");
const textoResposta54 = document.getElementById("text-response-step54");
const dadosStep54 = { peso: [], altura: [] };
const condicionalB = [];
const condicionalC = [];
const condicionalD = [];
let counterValStep54 = 1;

function somenteNumerosStep54(num) {
  var er = /[^0-9]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

function reiniciarDados() {
  let reiniciarDados = (botaoStep54.textContent = "Reiniciar dados");
  return reiniciarDados;
}

function incrementClickStep54() {
  const clickStep54 = ++counterValStep54;
  botaoStep54.textContent = "Confirme a " + clickStep54 + "ª pessoa";
  let peso = parseFloat(inputPesoStep54.value);
  let altura = parseFloat(inputAlturaStep54.value);
  if (
    inputPesoStep54.value.length === 0 ||
    inputAlturaStep54.value.length === 0
  ) {
    textoResposta54.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputPesoStep54.setAttribute("disabled", "disabled");
    inputAlturaStep54.setAttribute("disabled", "disabled");
    reiniciarDados();
    botaoStep54.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  } else {
    dadosStep54.peso.push(peso);
    dadosStep54.altura.push(altura);
    inputPesoStep54.value = "";
    inputAlturaStep54.value = "";
    // condicionalB = condição se a pessoa tem mais de 90kg//
    if (peso > 90) {
      condicionalB.push("TrueB");
    }
    // condicionalC = condição se a pessoa tem menos que 50 kg e menos de 1.60m//
    if (peso < 50 && altura < 160) {
      condicionalC.push("TrueC");
    }
    // condicionalD = condição se a pessoa tem mais que 100 kg e mais de 1.90m//
    if (peso > 100 && altura > 190) {
      condicionalD.push("TrueD");
    }
  }

  const arrayAltura = dadosStep54.altura;

  if (clickStep54 === 5) {
    botaoStep54.textContent = "Confirmar última pessoa";
  }
  if (clickStep54 === 6) {
    botaoStep54.textContent = "Mostrar dados";
    inputPesoStep54.setAttribute("disabled", "disabled");
    inputAlturaStep54.setAttribute("disabled", "disabled");
    botaoStep54.addEventListener("click", (e) => {
      e.preventDefault();
      // media entre as altura //
      let soma = 0;
      for (let i = 0; i < arrayAltura.length; i++) {
        soma += arrayAltura[i];
      }
      let mediaAltura = soma / arrayAltura.length;
      // Mensagens de exibição //
      textoResposta54.innerHTML =
        '<p class="mt-3 mb-0">A altura média do grupo foi de ' +
        mediaAltura +
        " cm;</br>" +
        (condicionalB.length === 0
          ? "Não tem ninguém acima de 90kg;</br>"
          : condicionalB.length === 1
          ? "Existe " + condicionalB.length + " pessoa acima de 90kg;</br>"
          : "Existem " + condicionalB.length + " pessoas acima de 90kg;</br>") +
        (condicionalC.length === 0
          ? "Não tem ninguém com menos de 50kg e menos de 1.60m;</br>"
          : condicionalC.length === 1
          ? "Existe " +
            condicionalC.length +
            " com menos de 50kg e menos de 1.60m;</br>"
          : "Existem " +
            condicionalC.length +
            " com menos de 50kg e menos de 1.60m;</br>") +
        (condicionalD.length === 0
          ? "E não tem ninguém com mais de 100kg e mais de 1.90m!"
          : condicionalD.length === 1
          ? "E existe " +
            condicionalD.length +
            " com mais de 100kg e mais de 1.90m!"
          : "E existem " +
            condicionalD.length +
            " com mais de 100kg e mais de 1.90m!") +
        "</p>";
    });
  }
  if (clickStep54 === 7) {
    reiniciarDados();
    botaoStep54.addEventListener("click", (e) => {
      location.reload();
    });
  }
}

// ----- code step 55 ----- //

const botaoStep55 = document.getElementById("botao-step55");
const inputTentativaStep55 = document.getElementById("n1-step55");
const textoResposta55 = document.getElementById("text-response-step55");
let counterValStep55 = 1;

function reniciarJogo() {
  inputTentativaStep55.setAttribute("disabled", "disabled");
  botaoStep55.textContent = "Reiniciar jogo";
  botaoStep55.addEventListener("click", (e) => {
    location.reload();
  });
}

function numeroSorteado() {
  return Math.floor(Math.random() * 10 + 1);
}

function jogo() {
  let numeroChutado = parseInt(inputTentativaStep55.value);
  if (inputTentativaStep55.value.length === 0) {
    textoResposta55.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    reniciarJogo();
  } else if (sorteado === numeroChutado) {
    textoResposta55.innerHTML =
      '<p class="mt-3 mb-0"> Acertou! Era nesse número mesmo que eu estava pensando!</p>';
    reniciarJogo();
  } else {
    if (botaoStep55.textContent === "Sem tentativa") {
      textoResposta55.innerHTML = '<p class="mt-3 mb-0">GAME OVER!</p>';
      inputTentativaStep55.value = "";
      reniciarJogo();
    } else {
      textoResposta55.innerHTML =
        '<p class="mt-3 mb-0"> ERROU! Outra chance!</p>';
      inputTentativaStep55.value = "";
    }
  }
}

const sorteado = numeroSorteado();

function incrementClickStep55() {
  const clickStep55 = ++counterValStep55;
  botaoStep55.textContent = clickStep55 + "ª tentativa";
  if (clickStep55 === 2) {
    jogo();
  }
  if (clickStep55 === 3) {
    jogo();
  }
  if (clickStep55 === 4) {
    botaoStep55.textContent = "Ultima tentativa";
    jogo();
  }
  if (clickStep55 === 5) {
    botaoStep55.textContent = "Sem tentativa";
    jogo();
  }
}

// ----- code step 56 ----- //

const textoResposta56 = document.getElementById("text-response-step56");
const numbers = [];
let soma = 0;

function somaTotal() {
  for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
  }
  return soma;
}

function somenteNumerosStep56(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  } else {
    if (campo.value === "") {
      return;
    } else if (campo.value === "5") {
      somaTotal();
      textoResposta56.innerHTML =
        '<p class="mt-3 mb-0">A soma foi de ' + (soma + 5) + "!</p>";
      campo.value = "";
    } else {
      let stringToNumber = parseInt(campo.value);
      numbers.push(stringToNumber);
      campo.value = "";
    }
  }
}

// ----- code step 57 ----- //

const botaoStep57 = document.getElementById("botao-step57");
const botaoFinalizar = document.getElementById("botao-FinalizarStep57");
const inputSalarioStep57 = document.getElementById("numero-step57");
const inputGeneroStep57 = document.getElementById("genero-step57");
const textoResposta57 = document.getElementById("text-response-step57");
const dadosStep57 = { salariosHomens: [], salariosMulheres: [] };

function adicionarBotaoFinalizar() {
  return (botaoFinalizar.innerHTML =
    '<button onclick="finalizarStep57()" class="btn btn-dark m-2 mt-0 mb-0" type="button">Finalizar</button>');
}

function guardarSalarios() {
  let salario = parseFloat(inputSalarioStep57.value);
  let genero = inputGeneroStep57.value;
  adicionarBotaoFinalizar();
  if (genero === "masculino") {
    dadosStep57.salariosHomens.push(salario);
    inputSalarioStep57.value = "";
  } else {
    dadosStep57.salariosMulheres.push(salario);
    inputSalarioStep57.value = "";
  }
}

function verificacao() {
  if (
    inputSalarioStep57.value.length === 0 ||
    inputGeneroStep57.value === "Gênero"
  ) {
    textoResposta57.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    botaoStep57.textContent = "Reiniciar dados";
    botaoStep57.addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  } else {
    guardarSalarios();
  }
}

function incrementClickStep57() {
  verificacao();
}

function somaSalarios() {
  const salarioM = dadosStep57.salariosHomens;
  const salarioW = dadosStep57.salariosMulheres;
  let elementM = 0;
  let elementW = 0;

  for (let i = 0; i < salarioM.length; i++) {
    elementM += salarioM[i];
  }
  for (let i = 0; i < salarioW.length; i++) {
    elementW += salarioW[i];
  }
  const valorFinalHomem = elementM.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const valorFinalMulher = elementW.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const valoresFinais = [valorFinalHomem, valorFinalMulher];
  textoResposta57.innerHTML =
    '<p class="mt-3 mb-0">A soma foi dos salários dos Homens foi de ' +
    valoresFinais[0] +
    " e das Mulheres foi de " +
    valoresFinais[1] +
    "!</p>";
  botaoStep57.textContent = "Reiniciar salários";
  botaoStep57.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
}

function finalizarStep57() {
  somaSalarios();
}

// ----- code step 58 ----- //

const botaoStep58 = document.getElementById("botao-step58");
const botaoFinalizarStep58 = document.getElementById("botao-FinalizarStep58");
const inputIdadeStep58 = document.getElementById("numero-step58");
const textoResposta58 = document.getElementById("text-response-step58");
const idadeAlunos = [];

function adicionarBotaoFinalizarStep58() {
  return (botaoFinalizarStep58.innerHTML =
    '<button onclick="finalizarStep58()" class="btn btn-dark m-2 mt-0 mb-0" type="button">Finalizar</button>');
}
function guardarIdades() {
  let idades = parseInt(inputIdadeStep58.value);
  idadeAlunos.push(idades);
  inputIdadeStep58.value = "";
  inputIdadeStep58.focus();
}

function verificacaoStep58() {
  if (inputIdadeStep58.value.length === 0) {
    textoResposta58.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputIdadeStep58.focus();
  } else {
    adicionarBotaoFinalizarStep58();
    guardarIdades();
    textoResposta58.innerHTML = "";
  }
}

function incrementClickStep58() {
  verificacaoStep58();
}

function mediaIdadeAlunos() {
  let totalIdades = 0;
  for (let i = 0; i < idadeAlunos.length; i++) {
    totalIdades += idadeAlunos[i];
  }
  return totalIdades / idadeAlunos.length;
}

function finalizarStep58() {
  mediaIdadeAlunos();
  inputIdadeStep58.setAttribute("disabled", "disabled");
  let totalAlunos = idadeAlunos.length;
  let mediaIdades = mediaIdadeAlunos();
  textoResposta58.innerHTML =
    '<p class="mt-3 mb-0">Temos um total de ' +
    totalAlunos +
    " alunos registrados, e uma média de idade de " +
    mediaIdades.toFixed(1) +
    " anos.</p>";
  botaoFinalizarStep58.innerHTML = "";
  botaoStep58.textContent = "Reiniciar programa";
  botaoStep58.addEventListener("click", (e) => {
    location.reload();
  });
}

// ----- code step 59 ----- //

const botaoStep59 = document.getElementById("botao-step59");
const botaoFinalizarStep59 = document.getElementById("botao-FinalizarStep59");
const inputIdadeStep59 = document.getElementById("numero-step59");
const inputGeneroStep59 = document.getElementById("genero-step59");
const textoResposta59 = document.getElementById("text-response-step59");
const dadostep59 = { idades: [], genero: [] };
const idadeHomens = [];
const idadeMulheres = [];
const dadosIdade = dadostep59.idades;
const dadosGenero = dadostep59.genero;

function adicionarBotaoFinalizarStep59() {
  return (botaoFinalizarStep59.innerHTML =
    '<button onclick="finalizarStep59()" class="btn btn-dark m-2 mt-0 mb-0" type="button">Finalizar</button>');
}

function guardarDados() {
  let idades = parseInt(inputIdadeStep59.value);
  let genero = inputGeneroStep59.value;
  dadosIdade.push(idades);
  dadosGenero.push(genero);
  if (genero === "masculino") {
    idadeHomens.push(idades);
  } else {
    idadeMulheres.push(idades);
  }
  inputIdadeStep59.value = "";
  inputIdadeStep59.focus();
}

function verificacaoStep59() {
  if (
    inputIdadeStep59.value.length === 0 ||
    inputGeneroStep59.value === "Gênero"
  ) {
    textoResposta59.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputIdadeStep59.focus();
  } else {
    adicionarBotaoFinalizarStep59();
    guardarDados();
    textoResposta59.innerHTML = "";
  }
}

function incrementClickStep59() {
  verificacaoStep59();
}

function pessoaMaisVelha() {
  return Math.max.apply(null, dadosIdade);
}

function quantidadeHomens() {
  return idadeHomens.length;
}

function mulherMaisNova() {
  return Math.min.apply(null, idadeMulheres);
}

function mediaIdadeHomens() {
  let totalIdades = 0;
  for (let i = 0; i < idadeHomens.length; i++) {
    totalIdades += idadeHomens[i];
  }
  return totalIdades / idadeHomens.length;
}

function finalizarStep59() {
  pessoaMaisVelha();
  quantidadeHomens();
  mulherMaisNova();
  mediaIdadeHomens();
  let maiorIdade = pessoaMaisVelha();
  let totalHomens = quantidadeHomens();
  let menorIdadeMulher = mulherMaisNova();
  let mediaIdadeH = mediaIdadeHomens();
  inputIdadeStep59.setAttribute("disabled", "disabled");
  textoResposta59.innerHTML =
    '<p class="mt-3 mb-0">A maior idade é de ' +
    (maiorIdade === 1
      ? maiorIdade + " ano;</br>"
      : maiorIdade + " anos;</br>") +
    (totalHomens === 1
      ? "Foi apenas " + totalHomens + " homem registrado;</br>"
      : "Foram " + totalHomens + " homens registrados;</br>") +
    "A mulher mais jovem tem " +
    (menorIdadeMulher === 1
      ? menorIdadeMulher + " ano;</br>"
      : menorIdadeMulher + " anos;</br>") +
    "E a média de idade dos homens é de " +
    (mediaIdadeH === 1
      ? mediaIdadeH.toFixed(1) + " ano;</br>"
      : mediaIdadeH.toFixed(1) + " anos!</br>") +
    "</p>";
  botaoFinalizarStep59.innerHTML = "";
  botaoStep59.textContent = "Reiniciar programa";
  botaoStep59.addEventListener("click", (e) => {
    location.reload();
  });
}

// ----- code step 60 ----- //

const botaoStep60 = document.getElementById("botao-step60");
const botaoFinalizarStep60 = document.getElementById("botao-FinalizarStep60");
const inputNomeStep60 = document.getElementById("nome-step60");
const inputIdadeStep60 = document.getElementById("numero-step60");
const inputGeneroStep60 = document.getElementById("genero-step60");
const textoResposta60 = document.getElementById("text-response-step60");
const dadostep60 = { nome: [], idades: [], genero: [] };
const todasMulheres = { nome: [], idade: [] };
const mulheresAbaixo18 = [];
const homensAcima30 = [];
const dadosNomeStep60 = dadostep60.nome;
const dadosIdadeStep60 = dadostep60.idades;
const dadosGeneroStep60 = dadostep60.genero;

function adicionarBotaoFinalizarStep60() {
  return (botaoFinalizarStep60.innerHTML =
    '<button onclick="finalizarStep60()" class="btn btn-dark m-2 mt-0 mb-0" type="button">Finalizar</button>');
}

function guardarDados() {
  let nome = inputNomeStep60.value;
  let idades = parseInt(inputIdadeStep60.value);
  let genero = inputGeneroStep60.value;
  dadosNomeStep60.push(nome);
  dadosIdadeStep60.push(idades);
  dadosGeneroStep60.push(genero);
  if (genero === "feminino") {
    todasMulheres.nome.push(nome);
    todasMulheres.idade.push(idades);
  }
  if (genero === "masculino" && idades > 30) {
    homensAcima30.push(idades);
  } else if (genero === "feminino" && idades < 18) {
    mulheresAbaixo18.push(idades);
  }
  inputNomeStep60.value = "";
  inputIdadeStep60.value = "";
  inputNomeStep60.focus();
}

function verificacaoStep60() {
  if (
    inputNomeStep60.value.length === 0 ||
    inputIdadeStep60.value.length === 0 ||
    inputGeneroStep60.value === "Gênero"
  ) {
    textoResposta60.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    inputNomeStep60.focus();
  } else {
    adicionarBotaoFinalizarStep60();
    guardarDados();
    textoResposta60.innerHTML = "";
  }
}

function incrementClickStep60() {
  verificacaoStep60();
}

function pessoaMaisVelha() {
  return Math.max.apply(null, dadosIdadeStep60);
}

function mulherMaisNova() {
  return Math.min.apply(null, todasMulheres.idade);
}

function homensMais30() {
  return homensAcima30.length;
}

function mulheresMenos18() {
  return mulheresAbaixo18.length;
}

function finalizarStep60() {
  pessoaMaisVelha();
  mulherMaisNova();
  homensMais30();
  mulheresMenos18();
  let indexPessoaMaisVelha = dadosIdadeStep60.indexOf(pessoaMaisVelha());
  let indexMulherMaisNova = todasMulheres.idade.indexOf(mulherMaisNova());
  let totalHomensMais30 = homensMais30();
  let totalMulheresMenos18 = mulheresMenos18();
  inputNomeStep60.setAttribute("disabled", "disabled");
  inputIdadeStep60.setAttribute("disabled", "disabled");
  textoResposta60.innerHTML =
    '<p class="mt-3 mb-0">A pessoa mais velha é: ' +
    dadosNomeStep60[indexPessoaMaisVelha] +
    ";</br>A mulher mais nova é a " +
    dadosNomeStep60[indexMulherMaisNova] +
    ";</br>São " +
    totalHomensMais30 +
    " homens acima de 30 anos;</br>E " +
    totalMulheresMenos18 +
    " mulheres menores de 18 anos!</p>";
  botaoFinalizarStep60.innerHTML = "";
  botaoStep60.textContent = "Reiniciar programa";
  botaoStep60.addEventListener("click", (e) => {
    location.reload();
  });
}
