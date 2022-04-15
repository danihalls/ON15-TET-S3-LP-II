//função sem argumentos
function funcaoUm(){
    let soma = 1 + 3
    return console.log(soma)
}
funcaoUm()

//função com um único argumento

function funcaoDois(numero) {
    let soma = numero + 3
    return console.log(soma)
}
funcaoDois(5)

//função com mais de um argumento

function somar(numero1, numero2){
    let soma = numero1 + numero2
    return console.log(soma)
}
somar(5, 7)

//arrow function

//() => {}

somar3 = (numero1, numero2) => {
    let soma = numero1 + numero2
    return console.log(soma)
}
somar3 (6, 3)


