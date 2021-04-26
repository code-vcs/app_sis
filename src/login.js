
let desligar = document.querySelector('.desligar');
let atualizar = document.querySelector('.atualizar');
let senha = document.querySelector('#senha');
let btLogar = document.querySelector('#btLogar');


desligar.addEventListener('click', () => {
   document.querySelector('.container').style.display="block";
   setTimeout(()=>{
       close() // fechar tela principal
   },4000)
})
atualizar.addEventListener('click', () => {
    window.location.reload() // atualizar
    open('../view/sistema.html', '_blank').close()  // fecha a tela sistema
})


btLogar.addEventListener('click', () => {
    document.querySelector('.container').style.display="block";
    setTimeout(() => {
        if (senha.value !== '123') {
            document.querySelector('.container').style.display="none"
            open(`../info/infoErro.html`, '_blank', 'width=400,height=150,top=150');
        } else {
            document.querySelector('.container').style.display="none"
            open(`../view/sistema.html`, '_blank', 'width=1300,height=652,top=20');
            document.querySelector('#formulario').style = "display:none;";
            document.querySelector('.sistema-ativo').style = "display:block;color:limeGreen";
            document.querySelector('.fa-spin').style = "color:limeGreen"; document.querySelector('.fa-linux').style = "color:blue"
            
    
        }
        
    }, 5000);


})



