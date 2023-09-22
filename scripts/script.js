
// Insere números no visor
function insert(num){
  var numero =  document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num  ;
}


// Botão limpar visor
function clean(){
    document.getElementById('resultado').innerHTML = ""
}


// Botão "backspace"
function back(){
  var resultado =  document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}


// Botão " = "
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}