import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model} from "miragejs";

//criando servidor
createServer({
  //criando banco de dados
  models: {
    transaction: Model,
  },

  //incluindo dados ja mockados no banco de dados
  seeds(server)
  {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title:"Freelance de Website",
          type:"deposit",
          category:"Dev",
          amount:600,
          createdAt: new Date('2021-02-12 9:00:00'),
        },
        {
          id: 2,
          title:"Elden Ring",
          type:"withdraw",
          category:"Joguinho",
          amount:300,
          createdAt: new Date('2022-03-09 15:31:20'),
        },
      ],
    })
  },

  //definindo rotas da api fake
  routes(){
    //definindo o nome da base rota
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', {...data, createdAt: new Date()})
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

