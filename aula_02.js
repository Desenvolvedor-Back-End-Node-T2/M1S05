const pedido = {
    id: '12345',
    data: '2026-01-01',
    cliente: {
        id: 1,
        nome: 'Paulo',
        cpf: '000.000.000.-00'
    },
    valor: 1998.89
}

//console.log(Object.entries(pedido))

for (const [chave, valor] of Object.entries(pedido)){
    console.log(`${chave}: ${valor}`) 
}

