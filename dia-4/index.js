function insert(num)
{
    const numero = document.getElementById('inputCalc').innerHTML;
    document.getElementById('inputCalc').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('inputCalc').innerHTML = "";
    document.getElementById('logCalc').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('inputCalc').innerHTML;
    document.getElementById('inputCalc').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    const resultado = document.getElementById('inputCalc').innerHTML;
    if(resultado)
    {

        const calculo = document.getElementById('inputCalc').innerHTML;

        const logElement = document.createElement('span');
        document.getElementById('inputCalc').innerHTML = eval(resultado);

        if(calculo == eval(resultado)){
            return;
        }else{
            const logText = document.createTextNode(`${calculo} = ${eval(resultado)}`);
            logElement.appendChild(logText);
            document.getElementById('logCalc').appendChild(logElement);

        }


    }
    else
    {
        document.getElementById('inputCalc').innerHTML = "0"
    }
}