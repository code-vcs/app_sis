let input = document.getElementsByTagName('input');

let dadosArmazenados = []
function enviarDadosCadastrados(){

    let dadosProdutos = input[0].value;  // produto
    dadosArmazenados.push(dadosProdutos);
    localStorage.setItem('produto', dadosArmazenados);

}

window.addEventListener('load', () => {
    let dadosResgatados = localStorage.getItem('produto')
    dadosArmazenados.push(dadosResgatados); // incrementa no final o valor apos a atualização
    
    let transformacao = JSON.stringify(dadosArmazenados).replace(/\,/g, ' ').replace(/\[/g, ' ').replace(/\]/g, ' ').split(" ");
    console.log(typeof transformacao) // string
    console.log(transformacao)
    
})

