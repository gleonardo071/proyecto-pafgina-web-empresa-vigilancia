
let mysql = require ('mysql');

let conexion = mysql.createConnection({
host:'localhost',
database:'FORMULARIO',
user:'root',
password:'garzon452'

});

let insert = "insert "

conexion.connect(function(err){
    if(err){
        throw err;
    } else{
        console.log("conexion exitosa");
    }
})

conexion.end();
