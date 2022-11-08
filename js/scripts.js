
// Forma antiga
// let Continuar = true;

// while (Continuar == true) {
//   let NomeAlunoVerificador = true;
//   while (NomeAlunoVerificador == true) {
//     let NomeAluno = prompt(`Informe o nome do aluno`);
//     let Confirmação = confirm(`Deseja confirmar o nome do aluno: ${NomeAluno}`);

//     if (Confirmação == true) {
//       alert(`Agradecemos a confirmação`);
//       NomeAlunoVerificador = false;
//     } else {
//       alert(`Agradecemos a confirmação`);
//     }
//   }
//   let PainelDeControle = prompt(`
//   1- Calcular a média`);
//   if (
//     isNaN(PainelDeControle) ||
//     PainelDeControle >= 2 ||
//     PainelDeControle <= 0
//   ) {
//     alert(`Erro`);
//   }

//   while (PainelDeControle == 1) {
//     let Nota1 = prompt(`Informe a primeira nota do aluno`);
//     let Nota2 = prompt(`Informe a segunda nota do aluno`);
//     let Nota3 = prompt(`Informe a terceira nota do aluno`);
//     let Nota4 = prompt(`Informe a quarta nota do aluno`);
//     let Nota5 = prompt(`Informe a quinta nota do aluno`);
//     let Nota6 = prompt(`Informe a sexta nota do aluno`);
//     let Nota7 = prompt(`Informe a sétima nota do aluno`);
//     let Nota8 = prompt(`Informe a oitava nota do aluno`);
//     let Nota9 = prompt(`Informe a nona nota do aluno`);
//     let Nota10 = prompt(`Informe a decima nota do aluno`);

//     let Soma =
//       (parseInt(Nota1) +
//         parseInt(Nota2) +
//         parseInt(Nota3) +
//         parseInt(Nota4) +
//         parseInt(Nota5) +
//         parseInt(Nota6) +
//         parseInt(Nota7) +
//         parseInt(Nota8) +
//         parseInt(Nota9) +
//         parseInt(Nota10)) /
//       10;
//     alert(`A média do aluno: ${NomeAluno} foi de: ${Soma}`);

//     PainelDeControle = confirm(`Deseja calcular mais uma média?`);

//     if (PainelDeControle == true) {
//       PainelDeControle = 1;
//       alert(`Agradecemos a confirmação`);
//     } else {
//       alert(`Agradecemos a confirmação`);
//     }
//   }
// }

// Forma Nova
let Repetidor = false;
let NomeAluno = ``;
let RepetidorGlobal = true
do {
  NomeAluno = prompt(`Informe o nome do aluno`);
  let Confirm = confirm(`Deseja confirmar o nome do aluno?`);

  if (Confirm === true) {
    alert(`Agradecemos a confirmação :)`);
    Repetidor = true;
    RepetidorGlobal = false
  } else {
    alert(`Redirecionaremos o senhor para a tela anterior`);
  }

  do {
    let Soma = 0
    let DiferençaDeNota = 0
    let PainelDeControle = prompt(`Escolha uma opção abaixo
    1- Calcular Média
    2- Sair
    Nome do aluno: ${NomeAluno}`);

    if (
      isNaN(PainelDeControle) ||
      PainelDeControle >= `3` ||
      PainelDeControle <= `0`
    ) {
      alert(`Digite somente números entre 1 a 2`);
    } else if (PainelDeControle === `1`) {
      let Notas = {
        NotaAluno1: prompt(`Informe a 1º nota do aluno`),
        NotaAluno2: prompt(`Informe a 2º nota do aluno`),
        NotaAluno3: prompt(`Informe a 3º nota do aluno`),
        NotaAluno4: prompt(`Informe a 4º nota do aluno`),
        NotaAluno5: prompt(`Informe a 5º nota do aluno`),
        NotaAluno6: prompt(`Informe a 6º nota do aluno`),
        NotaAluno7: prompt(`Informe a 7º nota do aluno`),
        NotaAluno8: prompt(`Informe a 8º nota do aluno`),
        NotaAluno9: prompt(`Informe a 9º nota do aluno`),
        NotaAluno10: prompt(`Informe a 10º nota do aluno`),
      };
      Notas;

      if (isNaN(Notas)) {
        alert(`Digite somente números`);
      } else {
        Soma.toFixed(2) = (parseFloat(Notas.NotaAluno1) +
        parseFloat(Notas.NotaAluno2) +
        parseFloat(Notas.NotaAluno3) +
        parseFloat(Notas.NotaAluno4) +
        parseFloat(Notas.NotaAluno5) +
        parseFloat(Notas.NotaAluno6) +
        parseFloat(Notas.NotaAluno7) +
        parseFloat(Notas.NotaAluno8) +
        parseFloat(Notas.NotaAluno9) +
        parseFloat(Notas.NotaAluno10)) / 10;
        
        DiferençaDeNota = Soma - DiferençaDeNota
      }
      if (Soma >= 9) {
        alert(`O aluno: ${NomeAluno} foi muito bem e conseguiu passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
      else if (Soma >= 7) {
        alert(`O aluno: ${NomeAluno} foi bem passar de ano e conseguiu passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
      else if (Soma >= 6) {
        alert(`O aluno: ${NomeAluno} conseguiu passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
      else if (Soma >= 3.7) {
        alert(`O aluno: ${NomeAluno} ainda pode passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
      else if (Soma >= 1.2) {
        alert(`O aluno: ${NomeAluno} com muita sorte ainda pode passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
      else if (Soma >= 0) {
        alert(`O aluno: ${NomeAluno} Somente com milagre divino pode passar de ano, com a média de: ${Soma}.
        E está devendo: ${DiferençaDeNota} pontos`)
      }
    } else if (PainelDeControle === `2`) {
      alert(`Voltando...`)
      Repetidor = false
    }
  } while (Repetidor === true); c
} while (RepetidorGlobal === true);