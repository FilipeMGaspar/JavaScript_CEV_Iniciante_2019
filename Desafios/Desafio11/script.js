let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')
let divresultado = document.querySelector('div#resultado')

function iniciar(){
    txtpeso.focus()
}


function calcular(){
    if(txtpeso.value.length==0){
      alert('!! [ERRO] !! Valor do Peso não foi informado!')
      txtpeso.focus()
    }else if(txtaltura.value.length == 0){
        alert('!! [ERRO] !! Valor da Altura não foi informado!')
        txtaltura.focus()
    }else{
        if(Number(txtpeso.value)<=0){
            alert(`!! [ERRO] !! valor: ${Number(txtpeso.value)} para o Peso é incorreto!`)
            txtpeso.focus()
            txtpeso.value = ''
        }else if (Number(txtaltura.value)<=0 || Number(txtaltura.value)>=3){
            alert(`!! [ERRO] !! O valor: ${Number(txtaltura.value)} para a Altura é inválido!`)
            txtaltura.focus()
            txtaltura.value = ''
        }else{
            calculaimc(Number(txtpeso.value), Number(txtaltura.value))
        }
    }
}

function calculaimc(peso , altura){
    let imc = peso / (altura*altura)
    verSitucao(peso, altura, imc)    
}

function verSitucao(pesa, mede, imccalc){
    let pesa = pesa.toFixed(2)
    alert('tudo ok podemos continuar')
    divresultado.innerHTML =`<p>Para o peso de ${pesa}Kg e altura ${mede}m</p>`
    divresultado.innerHTML +=`<p>O seu IMC é de: ${imccalc}</p>`
}