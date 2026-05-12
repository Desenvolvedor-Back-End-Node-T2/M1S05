# Desafio Backend Node.js — Processamento de Pedidos de um Delivery

---

# 📌 Contextualização

Você faz parte da equipe backend de uma startup de delivery que vem crescendo rapidamente.
A aplicação foi construída utilizando **Node.js** e atualmente recebe centenas de pedidos por minuto.

Os pedidos chegam no backend em formato **JSON** e precisam ser processados para:

* gerar relatórios administrativos;
* calcular faturamento;
* validar informações;
* filtrar pedidos;
* transformar dados para APIs e dashboards.

A equipe percebeu que vários trechos do código estão repetitivos e difíceis de manter.
Seu objetivo será refatorar e implementar soluções utilizando conceitos modernos do JavaScript.

---

# 🧠 Cenário da Aplicação

O sistema possui uma coleção de pedidos recebidos diariamente pelo backend.

Cada pedido contém:

* ID do pedido
* Nome do cliente
* Lista de itens comprados
* Status do pedido
* Forma de pagamento

Os dados chegam no seguinte formato:

```json
[
  {
    "id": 1,
    "cliente": "Maria",
    "itens": [
      {
        "produto": "Pizza",
        "quantidade": 2,
        "preco": 50
      },
      {
        "produto": "Refrigerante",
        "quantidade": 1,
        "preco": 8
      }
    ],
    "status": "entregue",
    "pagamento": "pix"
  },
  {
    "id": 2,
    "cliente": "João",
    "itens": [
      {
        "produto": "Hamburguer",
        "quantidade": 3,
        "preco": 25
      }
    ],
    "status": "pendente",
    "pagamento": "cartao"
  },
  {
    "id": 3,
    "cliente": "Ana",
    "itens": [
      {
        "produto": "Pizza",
        "quantidade": 1,
        "preco": 50
      },
      {
        "produto": "Suco",
        "quantidade": 2,
        "preco": 10
      }
    ],
    "status": "entregue",
    "pagamento": "dinheiro"
  }
]
```

---

# 🚀 Parte 1 — Manipulação de Arrays e Objetos

---

## ✅ Desafio 1 — Listar nomes dos clientes

Crie uma função que percorra os pedidos e retorne apenas os nomes dos clientes.

### 📥 Exemplo esperado

```js
["Maria", "João", "Ana"]
```

### 🎯 Conceitos trabalhados

* `map`
* objetos
* acesso a propriedades
* arrays

---

## ✅ Desafio 2 — Buscar pedido por ID

Crie uma função que encontre o pedido cujo `id` seja igual a `2`.

### 🎯 Conceitos trabalhados

* `find`
* busca em arrays
* comparação de valores

---

## ✅ Desafio 3 — Filtrar pedidos entregues

Crie uma função que retorne apenas os pedidos cujo status seja `"entregue"`.

### 🎯 Conceitos trabalhados

* `filter`
* condicionais
* arrays de objetos

---

## ✅ Desafio 4 — Verificar status geral dos pedidos

Crie uma função que valide se todos os pedidos foram entregues.

A função deve retornar:

```js
true
```

ou

```js
false
```

### 🎯 Conceitos trabalhados

* `every`
* validações
* operadores lógicos

---

# 💰 Parte 2 — Relatórios Financeiros

---

## ✅ Desafio 5 — Calcular total de cada pedido

Crie uma função que gere um novo array contendo:

* nome do cliente
* valor total do pedido

### 📥 Resultado esperado

```js
[
  { cliente: "Maria", total: 108 },
  { cliente: "João", total: 75 },
  { cliente: "Ana", total: 70 }
]
```

### ⚠️ Regras

O valor total do pedido deve considerar:

```txt
quantidade × preço
```

### 🎯 Conceitos trabalhados

* `map`
* `reduce`
* arrays aninhados
* objetos

---

## ✅ Desafio 6 — Calcular faturamento total

Crie uma função que some todos os pedidos da empresa.

### 📥 Resultado esperado

```js
253
```

### 🎯 Conceitos trabalhados

* `reduce`
* acumuladores
* somatórios

---

# 🔄 Parte 3 — JSON e Conversão de Dados

---

## ✅ Desafio 7 — Converter objeto para JSON

Converta o array de pedidos em uma string JSON.

### 🎯 Conceitos trabalhados

* `JSON.stringify`
* serialização de dados

---

## ✅ Desafio 8 — Converter JSON novamente para objeto

Transforme a string JSON novamente em array de objetos JavaScript.

### 🎯 Conceitos trabalhados

* `JSON.parse`
* desserialização

---

# 🔁 Parte 4 — Callbacks

No backend da aplicação existe a seguinte função utilitária:

```js
function processarPedidos(pedidos, callback) {
  return callback(pedidos)
}
```

Você deverá utilizar essa função para reutilizar processamentos diferentes.

---

## ✅ Desafio 9 — Criar callbacks personalizados

Utilize callbacks para:

* listar clientes;
* calcular faturamento;
* filtrar pedidos pendentes.

### 🎯 Conceitos trabalhados

* callbacks
* funções anônimas
* funções reutilizáveis
* abstração

---

# 🏆 Parte 5 — Desafio Extra (Situação Real)

O gestor da empresa precisa de relatórios mais avançados.

Implemente funções para responder às seguintes perguntas:

---

## ✅ 1. Qual produto foi mais vendido?

Exemplo esperado:

```js
{
  produto: "Pizza",
  quantidade: 3
}
```

---

## ✅ 2. Qual cliente gastou mais?

Retorne:

* nome do cliente
* valor total gasto

---

## ✅ 3. Quantos pedidos foram pagos com PIX?

A função deve retornar apenas a quantidade.

---

## ✅ 4. Qual o ticket médio da empresa?

O ticket médio deve considerar:

```txt
faturamento total / quantidade de pedidos
```

---

# 📚 Regras do Desafio

* Utilize apenas JavaScript puro;
* Não utilize bibliotecas externas;
* Evite `for` tradicional sempre que possível;
* Priorize:

  * `map`
  * `filter`
  * `find`
  * `reduce`
  * `every`

---

# 🧩 Estrutura Recomendada

```txt
📁 desafio-backend
 ┣ 📄 index.js
 ┣ 📄 pedidos.js
 ┣ 📄 relatorios.js
 ┗ 📄 README.md
```

---

# 💡 Dicas

* Divida os problemas em pequenas funções;
* Utilize `console.log()` para validar resultados;
* Teste cada função individualmente;
* Utilize nomes de variáveis claros;
* Evite repetir lógica.


---

## ✅ Desafio Avançado

Implemente:

* ordenação de clientes por gasto;
* busca de pedidos por status;
* filtros dinâmicos;
* persistência em arquivo JSON.

---
