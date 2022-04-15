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

    console.log('-----')
    console.log('Cliente Lilit')
    console.log('-----')

    function realizarCompra(comprasDaCliente) {
        let valorTotal = 0 
        let descontoAplicado = 0 
        let valorFinal = 0  
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

        let dataDaCompra = new Date()
    console.log(dataDaCompra)

       let notaFiscal = {
           "Valor Total": valorTotal,
           "Desconto Aplicado": descontoAplicado,
           "Valor Final": valorFinal,
           "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
            
       }

       if(quantidadeProdutos > 10 || valorFinal > 800.0) {
           return console.table({
               ...notaFiscal, 
               "Bônus": 'você ganhou um cupom de R$50,00 para a sua próxima compra'
           })
       }else{
           return console.table(notaFiscal)
       }

    }


   realizarCompra(clienteLilit)

   console.log('-----')
   console.log('Cliente João')
   console.log('-----')

   let clienteJoao = [
    {produto: 'Moletom Adidas', valor: 125.0}, 
    {produto: 'Sunga preta', valor: 99.90}, 
    {produto: 'Sapatênis', valor: 330.0}, 
    {produto: 'Camisa regata cinza', valor: 45.0}, 
    ]

    function realizarCompra(comprasDaCliente) {
        let valorTotal = 0 
        let descontoAplicado = 0 
        let valorFinal = 0  
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

        let dataDaCompra = new Date()
    console.log(dataDaCompra)

       let notaFiscal = {
           "Valor Total": valorTotal,
           "Desconto Aplicado": descontoAplicado,
           "Valor Final": valorFinal,
           "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
            
       }

       if(quantidadeProdutos > 10 || valorFinal > 800.0) {
           return console.table({
               ...notaFiscal, 
               "Bônus": 'você ganhou um cupom de R$50,00 para a sua próxima compra'
           })
       }else{
           return console.table(notaFiscal)
       }

    }


   realizarCompra(clienteJoao)

   console.log('-----')
   console.log('Cliente Carolina')
   console.log('-----')

   let clienteCarolina = [
    {produto: 'Tênis ous', valor: 350.0}, 
    {produto: 'Calça jeans', valor: 180.00}, 
    {produto: 'Camiseta Nike preta', valor: 50.0}, 
    {produto: 'Pochete azul', valor: 45.0}, 
    {produto: 'Meia cano baixo', valor: 20.0}, 
    {produto: 'Mochila volcom', valor: 150.0}, 
    {produto: 'Calcinha de algodão', valor: 16.0}, 
    {produto: 'Camiseta branca adidas', valor: 85.0},
    {produto: 'Desodorante aerosol', valor: 15.0},
    {produto: 'Protetor labial Nivea', valor: 16.0},
    {produto: 'Case para óculos', valor: 25.0},
    ]

    function realizarCompra(comprasDaCliente) {
        let valorTotal = 0 
        let descontoAplicado = 0 
        let valorFinal = 0  
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

        let dataDaCompra = new Date()
        console.log(dataDaCompra)

       let notaFiscal = {
           "Valor Total": valorTotal,
           "Desconto Aplicado": descontoAplicado,
           "Valor Final": valorFinal,
           "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
            
       }

       if(quantidadeProdutos > 10 || valorFinal > 800.0) {
           return console.table({
               ...notaFiscal, 
               "Bônus": 'você ganhou um cupom de R$50,00 para a sua próxima compra'
           })
       }else{
           return console.table(notaFiscal)
       }

    }


   realizarCompra(clienteCarolina )

