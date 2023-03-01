var segundo = document.getElementById("segundo");
var minuto = document.getElementById ("minuto");
var hora = document.getElementById("hora");


var botaoIniciar = document.getElementById ("iniciar");
var botaoPare =document.getElementById("pare")

var ss =0;
var hh =0;
var mm =0;

var cronometro;


function inicializarCronohmetro (){
 botaoIniciar.style.display = "none"
 botaoPare.style.display = "flex";
 cronometro = setInterval(() => {tempo();}, 1000);
}


function tempo(){
   ss++;
 

   if(ss <10){
    segundo.innerText = "0" +ss;
   }
   else{
    segundo.innerText = +ss;
    
   }
}