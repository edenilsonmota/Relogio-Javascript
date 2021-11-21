function zeroAEsquerda (horaTexto) {  //function para colocar 0 se o numero for menor que 10
    return horaTexto >= 10 ? horaTexto : `0${horaTexto}`;
}
setInterval(function() { //setInterval para atualizar o relogio
    const data = new Date();  //date
const diaSemana = data.getDay(); 
const mes = data.getMonth();
const horaTexto = data.getHours();
let diaSemanaTexto;
let mesTexto;


if (diaSemana === 0) {  //if para colocar o dia da semana escrito
    diaSemanaTexto = "Domingo"
}else if (diaSemana === 1){
    diaSemanaTexto = "Segunda-Feira"
}else if (diaSemana === 2){
    diaSemanaTexto = "Terça-Feira"
}else if (diaSemana === 3){
    diaSemanaTexto = "Quarta-Feira"
}else if (diaSemana === 4){
    diaSemanaTexto = "Quinta-Feira"
}else if (diaSemana === 5){
    diaSemanaTexto = "Sexta-Feira"
}else if (diaSemana === 6){
    diaSemanaTexto = "Sábado"
}

if (mes === 0) {       //if para colocar o mes escrito
    mesTexto = "Janeiro" 
}else if (mes === 1){
    mesTexto = "Fevereiro"
}else if (mes === 2){
    mesTexto = "Março"
}else if (mes === 3){
    mesTexto = "Abril"
}else if (mes === 4){
    mesTexto = "Maio"
}else if (mes === 5){
    mesTexto = "Junho"
}else if (mes === 6){
    mesTexto = "Julho"
}else if (mes === 7){
    mesTexto = "Agosto"
}else if (mes === 8){
    mesTexto = "Setembro"
}else if (mes === 9){
    mesTexto = "Outubro"
}else if (mes === 10){
    mesTexto = "Novembro"
}else if (mes === 11){
    mesTexto = "Dezembro"
}

document.getElementById('data').textContent =`${diaSemanaTexto}, ${zeroAEsquerda(data.getDate())} de ${mesTexto} de ${data.getFullYear()}`;
document.getElementById('hora').textContent = `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`;
}, 100);


