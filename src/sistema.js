
let frame = document.getElementsByTagName('iframe');

function internete(){
   
    frame[0].src='https://www.bing.com/'
}

function cliente(){
    
    frame[0].src='../view/cliente.html';
}
function cadastroProduto(){
    frame[0].src='../view/cadastroProduto.html';
}
function fecharTela(){
    close();
}
function aplicativos(){
    open(`../view/aplicatovos.html`, '_self', 'width=1200,height=600,top=50');
    
}


let relogio = document.createElement('div');
document.body.appendChild(relogio);

setInterval(()=>{
    let time = new Date();
    let dia = time.getDate();
    let mes = time.getMonth(); 
    let ano = time.getFullYear()
    let dateIncremento = (dia < 10?dia='0'+dia:dia);(mes < 10?mes='0'+mes:mes); 
                                     dateIncremento
    let h,m,s;
    h = time.getHours(); m = time.getMinutes(); s = time.getSeconds();  
    let incrementoTime = (h < 10?h='0'+h:h);(m < 10?m='0'+m:m);(s < 10?s='0'+s:s);
                                     incrementoTime
    relogio.innerHTML=`Time: ${h} : ${m} : ${s} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Data: ${dia}/${mes}/${ano}`;
    
    relogio.style="color:blue;font-size:15pt;text-align:center;margin-top:-30px";

},1000);


