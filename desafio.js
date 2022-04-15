let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

    function realizarCompra(comprasDaCliente) {
        let valorTotal = 0 //viariável com a soma de todos os valores dos produtos sem descontos
        let descontoAplicado = 0 //variável com a soma de todos os produtos com descontos
        let valorFinal = 0 // variável com a soma de todos os valores 
        let quantidadeProdutos = comprasDaCliente.length

        for(let item of comprasDaCliente){
            valorTotal += item.valor
            if (item.valor >= 200.0){
                descontoAplicado += (item.valor * 0.5)
                valorFinal += (item.valor * 0.5)
                
            } else if (item.valor >= 100.0){
                descontoAplicado +=  (item.valor  * .2)
                valorFinal += (item.valor * 0.8)
                
            } else if (item.valor >= 80.0){
                descontoAplicado +=  (item.valor  * .1)
                valorFinal += (item.valor * 0.9)

            } else if (item.valor >= 50.0) {
                descontoAplicado +=  (item.valor  * .05)
                valorFinal += (item.valor * 0.95)
            }else {
                valorFinal += item.valor
            }
        }
       let notaFiscal = {
           "Valor Total": valorTotal,
           "Desconto Aplicado": descontoAplicado,
           "Valor Final": valorFinal,
            
       }

       if(quantidadeProdutos > 10 || valorFinal > 800.0) {
           return console.table({
               ...notaFiscal, //... significa espalhar. para não escrever o que há anteriormente, o que ta no let anterior
               "Bônus": 'você ganhou um cupom de R$50,00 para a sua próxima compra'
           })
       }else{
           return console.table(notaFiscal)
       }

    }


   realizarCompra(clienteLilit)