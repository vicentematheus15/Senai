const idades = [12, 26, 8, 19, 34, 62, 45, 18, 36]

//reticências "..." é o Spread (espalhamento)
const maiorValor = Math.max(...idades)
console.log(maiorValor)
console.log(idades.indexOf(maiorValor))

// let maiorNum = idades[0]
// for(let i = 0; i <= idades.length; i++){
//     if(idades[i] > maiorNum){
//         maiorNum = idades[i]
//     }
// }
// console.log(maiorNum)

// idades.sort((a,b) => a - b)
// console.log(idades)
