calculo(155, 0)

function calculo(vitoria, derrota) {
    let resultado = vitoria - derrota;
   
     var nivel;
     if (resultado < 10) {
         nivel = "Ferro";
     } else if (resultado >= 11 && resultado <= 20) {
         nivel = "Bronze";
     } else if (resultado >= 21 && resultado <= 50) {
         nivel = "Prata";
     } else if (resultado >= 51 && resultado <= 80) {
         nivel = "Ouro";
     } else if (resultado >= 81 && resultado <= 90) {
         nivel = "Diamante";
     } else if (resultado >= 91 && resultado <= 100) {
         nivel = "Lendário";
     } else {
         nivel = "Imortal";
     }
    console.log(`O Herói tem o saldo de ${resultado} pontos e está no nível de ${nivel}`)
}