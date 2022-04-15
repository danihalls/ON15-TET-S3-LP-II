horario = 10;
if (horario >= 0 && horario <6){
    console.log('madrugada')
} else if (horario >= 6 && horario <12){
    console.log ('manhã')
} else if (horario >= 12 && horario < 18){
    console.log('tarde')
} else if (horario >= 18 && horario < 24){
    console.log('noite')
} else {
    console.log('O horário digitado é inválido')
}


//switch/case

let regiao

switch(regiao){
    case 'nordeste':
        console.let('possui 9 estados')
        break;

    case 'norte':
        console.log('possui 7 estados')
        break;
    
    case 'centro-oeste':
        console.log('possui 3 estados e o DF')
        break;

    case "sudeste":
            console.log('possui 4 estados')
            break;

    case 'sul':
        console.log('possui 3 estados')
        break;

    default: //caso não haja nas opções anteriores
        console.log('essa região não existe no Brasil')

}

//switch(horario){
   // case(horario >= 0 && horario <6):
  //      console.log('madrugada')
//}
// o switch/case serve para trabalhar com informações individuais. tipo para montar um jogo de batalha naval, onde precisa de cada opção para dar informações diferentes
//então o sistema não conseguirá ler. Para isso ser o switch/case, porém é mais utilizado o if/else


// EXERCÍCIO DE REVISÃO DE IF... ELSE

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

/*
ESCALA DE IDH

muitoBaixo: 0 - 0.499
baixo: .5(o sistema lê que há 0 na frente) - 0.599
médio: 0.6 - 0.699
alto: .7 - .799
muitoAlto: .8 - 1

*/

let idh = 0.3

if(idh >= 0  && idh < .5){
    console.log(`IDH muito baixo`) //uso da crase é uma string funcional
}
else if (idh >= 0.5 && idh <= 0.599){ //escrita diferente para visualizar diferentes possibilidades
    console.log(`IDH  baixo`)
} else if (idh >= .6 && idh < .7){
    console.log(`IDH  médio`)
}else if (idh >= .7 && idh < .8){
    console.log(`IDH  alto`)
}else if (idh >= .8 && idh <= 1){
    console.log(`IDH  muito alto`)
}else{
    console.log(`IDH  inválido`)
}

