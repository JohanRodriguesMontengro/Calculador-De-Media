let continuar = true;

while (continuar == true) {
  let nomeAluno = prompt(`Informe o nome do aluno`);
  let mediaEscolar = prompt(`Qual é a média da sua escola`);
  if (isNaN(mediaEscolar) || isNaN(nomeAluno)) {
    alert(`Tente Novamente`);
  } else {
    var verificador = true;
  }
  while (verificador == true) {
    let painelDeControle = prompt(`
    1- Calcular Média
    2- Calcular Média Geral
    3- Calcular Nota Prova
    4- Sair
    Nome Do Aluno: ${nomeAluno}`);

    if (
      isNaN(painelDeControle) ||
      painelDeControle <= 0 ||
      painelDeControle >= 5
    ) {
      alert(`Digite somente números`);
    } else if (painelDeControle === `1`) {
      let verificadorPainel1 = `S`;
      while (verificadorPainel1) {
        let materiaEscolhida = prompt(`
      1- Português
      2- Matemática
      3- Geografia
      4- Historia
      5- Ingles
      6- Artes
      7- Biologia
      8- Física
      9- Química
      10- Redação
      11- Escolha sua materia`);

        if (isNaN(materiaEscolhida) || materiaEscolhida >= 12) {
          alert(`Digite somente um número`)
        } else if (materiaEscolhida === `1`) {
          materiaEscolhida = `Português`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `2`) {
          materiaEscolhida = `Matemática`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `3`) {
          materiaEscolhida = `Geografia`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `4`) {
          materiaEscolhida = `Historia`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `5`) {
          materiaEscolhida = `Ingles`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `6`) {
          materiaEscolhida = `Artes`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `7`) {
          materiaEscolhida = `Bilogia`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `8`) {
          materiaEscolhida = `Física`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `9`) {
          materiaEscolhida = `Química`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `10`) {
          materiaEscolhida = `Redação`
          verificadorPainel1 = `N`
        } else if (materiaEscolhida === `11`) { 
          materiaEscolhida = prompt(`Digite o nome da sua materia`, `Digite aqui`)
          verificadorPainel1 = `N`
        }
      }
      let notaProva = prompt(`Informe a sua nota entre 0 e 10`)
      let notaProva2 = prompt(`Informe a sua nota entre 0 e 10`)
      let outros = prompt(`Informe a sua nota entre 0 e 10`)
      if (isNaN(notaProva) || isNaN(notaProva2) || isNaN(outros) ||
        notaProva >= 11 || notaProva <= -1 || notaProva2 >= 11 ||
          notaProva2 <= -1 || outros >= 11 || outros <= -1) {
        let soma = (parseFloat(notaProva) + parseFloat(notaProva2) + parseFloat(outros)) / 3
        soma = soma.toFixed(2)
        
        alert(`A sua média de ${materiaEscolhida} foi de: ${soma}`)
        }
    }
  }
}
