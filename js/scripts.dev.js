"use strict";

var Continuar = true;

while (Continuar == true) {
  var NomeAlunoVerificador = true;

  while (NomeAlunoVerificador == true) {
    var _NomeAluno = prompt("Informe o nome do aluno");

    var Confirmação = confirm("Deseja confirmar o nome do aluno: ".concat(_NomeAluno));

    if (Confirmação == true) {
      alert("Agradecemos a confirma\xE7\xE3o");
      NomeAlunoVerificador = false;
    } else {
      alert("Agradecemos a confirma\xE7\xE3o");
    }
  }

  var PainelDeControle = prompt("\n  1- Calcular a m\xE9dia");

  if (isNaN(PainelDeControle) || PainelDeControle >= 2 || PainelDeControle <= 0) {
    alert("Erro");
  }

  while (PainelDeControle == 1) {
    var Nota1 = prompt("Informe a primeira nota do aluno");
    var Nota2 = prompt("Informe a segunda nota do aluno");
    var Nota3 = prompt("Informe a terceira nota do aluno");
    var Nota4 = prompt("Informe a quarta nota do aluno");
    var Nota5 = prompt("Informe a quinta nota do aluno");
    var Nota6 = prompt("Informe a sexta nota do aluno");
    var Nota7 = prompt("Informe a s\xE9tima nota do aluno");
    var Nota8 = prompt("Informe a oitava nota do aluno");
    var Nota9 = prompt("Informe a nona nota do aluno");
    var Nota10 = prompt("Informe a decima nota do aluno");
    var Soma = (parseInt(Nota1) + parseInt(Nota2) + parseInt(Nota3) + parseInt(Nota4) + parseInt(Nota5) + parseInt(Nota6) + parseInt(Nota7) + parseInt(Nota8) + parseInt(Nota9) + parseInt(Nota10)) / 10;
    alert("A m\xE9dia do aluno: ".concat(NomeAluno, " foi de: ").concat(Soma));
    PainelDeControle = confirm("Deseja calcular mais uma m\xE9dia?");

    if (PainelDeControle == true) {
      PainelDeControle = 1;
      alert("Agradecemos a confirma\xE7\xE3o");
    } else {
      alert("Agradecemos a confirma\xE7\xE3o");
    }
  }
}