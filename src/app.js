const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')


const orcamentos = [
  {
    id: "EDv44BDmHU6AgCA2nk5r",
    servico: 'Certificado de Instalação',
    email: 'test5@hotmail.com',
    InformaçõesAdicionais: 'aaaaa'
  },

  {
    id: "EDv44BDnHU6AgCA2nk5r",
    servico: 'Conserto ou manutenção',
    email: 'yago.rox@hotmail.com',
    InformaçõesAdicionais:'bbbbbb'
  },

  {
    id: "EDv44BDqHU6AgCA2nk5r",
    servico: 'Fiação elétrica',
    email: 'test@hotmail.com',
    InformaçõesAdicionais: 'Preciso trocar a fiação da minha casa'
  },

  {
    id: "EDv44BDeHU6AgCA2nk5r",
    servico: 'Instalação',
    email: 'test2@hotmail.com',
    InformaçõesAdicionais: 'Solicito um troca de tomada'
  },

  {
    id: "EDv44BDoHU6AgCA2nk5r",
    servico: 'Instalação de ar condicionado',
    email: 'teste3@hotmail.com',
    InformaçõesAdicionais: '220v'
  },

  {
    id: "54151515",
    servico: 'Instalação de uma lâmpada',
    email: 'test4@gmail.com',
    InformaçõesAdicionais: 'test'
  }
]

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/orcamentos', function (req, res) { //endereco da requisicao onde e retornado orçamentos
  res.send(orcamentos)
})

app.get('/orcamentos/telefone', function (req, res) { //endereco da requisicao onde e retornado orçamentos
  res.send(telefone)
})

app.listen(3000) //execucao do servidor