const express = require("express"); //importando express
const app = express(); //iniciando o express


app.get("/", function(req,res){
    res.send("<h1>Hello world!</h1>")
});

app.get("/test",function(req,res){
    res.send("<h1>Segunda pagina</h1>")
})

app.listen(4043,function(erro){
    if(erro){
        console.log("Erro");
    }else{
        console.log("Servidor rodando");
    }
})