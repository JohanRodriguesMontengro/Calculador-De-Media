let Continuar = true;

while (Continuar == true) {
  let NomeAlunoVerificador = true;
  while (NomeAlunoVerificador == true) {
    let NomeAluno = prompt(`Informe o nome do aluno`);
    let Confirmação = confirm(`Deseja confirmar o nome do aluno: ${NomeAluno}`);

    if (Confirmação == true) {
      alert(`Agradecemos a confirmação`);
      NomeAlunoVerificador = false;
    } else {
      alert(`Agradecemos a confirmação`);
    }
  }
  let PainelDeControle = prompt(`
  1- Calcular a média`);
  if (
    isNaN(PainelDeControle) ||
    PainelDeControle >= 2 ||
    PainelDeControle <= 0
  ) {
    alert(`Erro`);
  }

  while (PainelDeControle == 1) {
    let Nota1 = prompt(`Informe a primeira nota do aluno`);
    let Nota2 = prompt(`Informe a segunda nota do aluno`);
    let Nota3 = prompt(`Informe a terceira nota do aluno`);
    let Nota4 = prompt(`Informe a quarta nota do aluno`);
    let Nota5 = prompt(`Informe a quinta nota do aluno`);
    let Nota6 = prompt(`Informe a sexta nota do aluno`);
    let Nota7 = prompt(`Informe a sétima nota do aluno`);
    let Nota8 = prompt(`Informe a oitava nota do aluno`);
    let Nota9 = prompt(`Informe a nona nota do aluno`);
    let Nota10 = prompt(`Informe a decima nota do aluno`);

    let Soma =
      (parseInt(Nota1) +
        parseInt(Nota2) +
        parseInt(Nota3) +
        parseInt(Nota4) +
        parseInt(Nota5) +
        parseInt(Nota6) +
        parseInt(Nota7) +
        parseInt(Nota8) +
        parseInt(Nota9) +
        parseInt(Nota10)) /
      10;
    alert(`A média do aluno: ${NomeAluno} foi de: ${Soma}`);

    PainelDeControle = confirm(`Deseja calcular mais uma média?`);

    if (PainelDeControle == true) {
      PainelDeControle = 1;
      alert(`Agradecemos a confirmação`);
    } else {
      alert(`Agradecemos a confirmação`);
    }
  }
}
