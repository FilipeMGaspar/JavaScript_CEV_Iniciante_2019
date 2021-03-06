let CxNum = document.querySelector('input#CxNum')
let cSelOpinao = document.querySelector('select#cSelOpinao')
let DivResultado = document.querySelector('div#resultado')

let VetIdades = []
let VetOpinioes = []

function iniciar(){
    CxNum.focus()
    CxNum.value=''
}

function Adicionar(){
    let cSelOpina = document.querySelector('select#cSelOpina')
    let valselresp = cSelOpina.options[cSelOpina.selectedIndex]
    
    if(CxNum.value.length==0){
        alert("!! [ERRO] !! Idade não informada!")
        iniciar()
    }else{
        if(verificaIdade(Number(CxNum.value))){
            AdicionarNaLista(Number(CxNum.value), valselresp.text)
            iniciar()
    
        }else{
            alert(`!! [ERRO] !! A Idade de ${Number(CxNum.value)} Anos. É inválida!`)
            iniciar()
        }
        
    }
}

function verificaIdade(Idade){

    if((Idade>0) && Idade<123){
        return true
    }else{
        return false
    }

}

function AdicionarNaLista(AnosDeIdade, opiniao){
    let intemOption = document.createElement('option')
    let BtnAdiciona = document.querySelector('input#BtnAdiciona')
    if(VetOpinioes.length>=0 && VetOpinioes.length <15){
        intemOption.text = `Idade: ${AnosDeIdade} | Avaliação: ${opiniao}`
        cSelOpinao.appendChild(intemOption)
        VetIdades.push(AnosDeIdade)
        VetOpinioes.push(opiniao)
    }else{
        mostraResultado()
        BtnAdiciona.style.display='none'
        
    }    
}

function mostraResultado(){
    DivResultado.innerHTML =`<p>No total foram registadas: <strong>${VetOpinioes.length}</strong> opiniões</p>`
    MediaIdadeOptimo(VetIdades, VetOpinioes)
    QtdPessoasRespRegular(VetOpinioes)
    PercentPessoasRespBom(VetOpinioes)
}

function MediaIdadeOptimo(LstIdade, LstOpinoes){
    let somaIdades = 0, mediaIdades = 1
    let totpessoasExc =0
    for (ind in LstOpinoes){
       if(LstOpinoes[ind] == 'Excelente'){
          somaIdades += Number(LstIdade[ind])
          totpessoasExc ++
       }
    }
    mediaIdades = (somaIdades/totpessoasExc)
    mediaIdades = mediaIdades.toFixed(2)
    DivResultado.innerHTML += `<p>Média das idades que respoderam Excelente: ${mediaIdades} anos.</p>`
}

function QtdPessoasRespRegular(ListOpinoes){
    let qtdPessoas = 0

    for (ind in ListOpinoes){
        if(ListOpinoes[ind] == 'Regular'){
            qtdPessoas ++
        }
     }

     DivResultado.innerHTML += `<p> Pessoas que responderam regular: ${qtdPessoas}</p>`
}

function PercentPessoasRespBom(ListaDeOpinoes){
    let percentBom = 1, QtdPessoas = 0
    
    for (ind in ListaDeOpinoes){
        if(ListaDeOpinoes[ind] == 'Bom'){
            QtdPessoas ++
        }
     }
     percentBom = percentBom.toFixed(2)
     percentBom = (QtdPessoas / ListaDeOpinoes.length) * 100

     DivResultado.innerHTML += `<p>Percentagem de pessoas que responderam bom: ${percentBom}%</p>`
}



