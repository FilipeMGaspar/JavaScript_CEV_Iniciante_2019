let numtestes = document.querySelector('div#notas')
let divResult = document.querySelector('div#resultado')

function registanotas(){
    let   NrTestes = document.getElementById('txtNrTestes')
    if(NrTestes.value.length == 0){
       alert('[ERRO] Número de Testes. Não preenchido!!!')
        NrTestes.focus()
    }else{
        if(Number(NrTestes.value)<0){
            alert(`[ERRO] O Número de Testes Indicado ${Number(NrTestes.value)} não é correcto.`)
            NrTestes.focus()
            NrTestes.value = ''
        }else{ 
            mostraFormDeNotas(Number(NrTestes.value))
        }
    }
}

function mostraFormDeNotas(ntestes){
    
    numtestes.innerHTML = ''
    
    numtestes.innerHTML += `<h1>Gestor de Notas</h1>`
   
    for(let c=1; c<=ntestes; c++){
        let lblnota = document.createElement('label')
        let txtnota = document.createElement('input')
        lblnota.setAttribute('for', `txtnota${c}`)
        lblnota.innerText = `${c}ª Nota: `
        txtnota.setAttribute('type', 'number')
        txtnota.setAttribute('id' , `txtnota${c}`)
        txtnota.style.width = '40px'
        txtnota.style.marginRight = '10px'
        numtestes.appendChild(lblnota)
        numtestes.appendChild(txtnota)    
    }
    let btnAdiciNota = document.createElement('input')
    btnAdiciNota.setAttribute('type' , 'button')
    btnAdiciNota.setAttribute('value', 'Calcular Média')
    btnAdiciNota.setAttribute('onclick', 'verificaNotas()')
    numtestes.appendChild(btnAdiciNota)

  
}

function verificaNotas(){

    alert('Estrei aqui no calculo da média')

}

function teste(numT){

    numtestes.innerHTML += '<br>'
    let selnotas = document.createElement('select')
    selnotas.setAttribute('id', 'selnotas')
    selnotas.setAttribute('size', `${numT}`)
    selnotas.style.width = '150px'
    selnotas.style.marginTop = '15px'
    numtestes.appendChild(selnotas)
   
    alert (`A sua turma fez ${numT} Testes`)

    divResult.innerHTML += `<p>A sua turma fez ${numT} Testes.</p>` 

}