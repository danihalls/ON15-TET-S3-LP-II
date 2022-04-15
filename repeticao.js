//for

for (let i = 0; i <= 10; i++){
    console.log(`número ${i}`)
}

for (let i = 0; i <= 10; i++){
    let soma = i + i
    console.log(`a soma de ${i} com ${i}  é ${soma}`) //usado a crase e não aspas
}

const numeros = [3, 2, 4, 5, 1, 3, 4, 2]
console.log(numeros.length) //quantidade de números no array = 8
console.log(numeros[0]) //acessa o valor do elemento do array = 3

//o elemento 0 = primeiro elemento = 3
//o elemento 1 = segundo elemento = 2
//nome da array + length é pedido que o sistema volte quantos elementos há no array

for (let i = 0; i < numeros.length; i++) {
     const dobro = numeros[i] * 2;
     console.log(`o dobro de ${numeros[i]} é ${dobro}`)
    }
    

//while = enquanto. Permite incluir outras condiçoes

let u = 0;
while (u <= 10) {
    console.log(`número ${u}`)
    u++
}

let y = 0;
while(y < numeros.length){
    const dobro = numeros[y] * 2;
    console.log(dobro)
    y++
}

//do...while = fazer...enquanto

let total = 0
let c = 0

do{
    total += c * 100
    c++
    console.log(`contador... ${c}`)
    console.log('total: ' + total)
 } while(c < 10)

 


//for... of - especificos para objetos interativos (funciona apenas para arrays)

for (let numero of numeros) {
    const dobro = numeros[numero] * 2;
    console.log(`o dobro de ${numeros[numero]} é ${dobro}`)
   } 