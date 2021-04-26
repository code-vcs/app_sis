

//   incrementando os caracteris nos inputs telefone e celular
document.getElementById('telefone-1').addEventListener('keyup', (x) => {
    if (document.getElementById('telefone-1').value.length == '2' || document.getElementById('telefone-1').value.length == '7') {
        document.getElementById('telefone-1').value += '-'
    }
})
document.getElementById('telefone-2').addEventListener('keyup', (x) => {
    if (document.getElementById('telefone-2').value.length == '2' || document.getElementById('telefone-2').value.length == '7') {
        document.getElementById('telefone-2').value += '-'
    }
})
document.getElementById('celular-1').addEventListener('keyup', (x) => {
    if (document.getElementById('celular-1').value.length == '2' || document.getElementById('celular-1').value.length == '8') {
        document.getElementById('celular-1').value += '-'
    }
})
//________________________________________________________//____________________________________________________________________

document.getElementById('cep').addEventListener('keyup', (x) => {
    if (document.getElementById('cep').value.length == '5') {
        document.getElementById('cep').value += '-'
    }
})

let input = document.getElementsByTagName('input');
let cep = document.querySelector('#cep')
function pesquisar() {
    let cepLimpo = (cep.value).replace(/\-/g, '');
    console.log(cepLimpo)
    let option = {
        method: "GET",
    }
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, option)
        .then(resp => resp.json())
        .then(capt => {
            input[8].value = capt.logradouro;
            input[9].value = capt.bairro;
            input[10].value = capt.uf;
            input[11].value = capt.localidade;
        })
}

//  EMPRESSA

document.getElementById('cep-2').addEventListener('keyup', (f) => {
    if (document.getElementById('cep-2').value.length == '5') {
        document.getElementById('cep-2').value += '-'
    }
})

let inp = document.getElementsByTagName('input');
let cepDois = document.querySelector('#cep-2')
function pesquisarCepEmpressa() {
    let cepLimpo = (cepDois.value).replace(/\-/g, '');
    console.log(cepLimpo)
    let option = {
        method: "GET",
    }
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, option)
        .then(resp => resp.json())
        .then(capt => {
            inp[22].value = capt.logradouro.toUpperCase(); 
            inp[23].value = capt.bairro.toUpperCase()
            inp[24].value = capt.uf.toUpperCase()
            inp[25].value = capt.localidade.toUpperCase()
       
               
            
        })
   
        
}



//https://viacep.com.br/ws/01001000/json/

/*
{
    "cep": "01001-000",
        "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
        "bairro": "Sé",
    "localidade": "São Paulo",
        "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }

  */


//  SANDRA GESTEIRA BATISTA CARVALHO - SANDIMI MODA FEMININA - 31.206.499/0001-11 - Consulta CNPJ.