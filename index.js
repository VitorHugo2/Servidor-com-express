const express = require("express"); //importando express
const app = express(); //iniciando o express

app.listen(4043,function(erro){
    if(erro){
        console.log("Erro");
    }else{
        console.log("Servidor rodando");
    }
})