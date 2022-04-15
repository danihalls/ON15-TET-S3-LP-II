const aluna = {
    nome: "Brena",
    idade: 29,
    cidade: "Rio de Janeiro",
    saudacao: () => console.log('hello, world') // não necessário return pois funçao com apenas uma linha não necessita

}

console.log(aluna.saudacao()) //chamando função

const aluna = {
    nome: "Brena",
    idade: 29,
    cidade: "Rio de Janeiro",
    saudacao: (data) => `oi meninas, cheguei ${data}`

}

console.log(aluna.saudacao('09/04/2022')) 


//objeto

const aluna = {
    nome:    {
             primeiro: 'Dani',
             segundo:   "Silva",}
    idade: 29,
    cidade: 'Recife',
    interesses: ['musica', 'filmes'],
    saudacao: (data) => `oi meninas,cheguei` ${data}
}

console.log(aluna.nome)


const professora = new Object()
professora.nome = 'Lilit'
professora.sobrenome = 'Bandeira'
professora.cidade = 'São Paulo'

console.log(professora)