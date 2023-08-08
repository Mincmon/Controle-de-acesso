let button=document.getElementById('conferir');

button.addEventListener
('click',function(){

let acesso=document.getElementById('cartao').value;
let corResultado=document.getElementById('resultado');
let corFundo=document.getElementById('fundo');

if (acesso=>3000) {
    document.querySelector('#resultado').textContent='Acesso Negado';
    corResultado.style.color='red';
    document.body.style.backgroundColor='red';
}
 if ((acesso<=2999) && (acesso=>2000)) {
    document.querySelector('#resultado').textContent='Acesso Limitado';
    corResultado.style.color='yellow';
    document.body.style.backgroundColor='yellow';  
}
 if ((acesso<=1999) && (acesso=>1000)) {
    document.querySelector('#resultado').textContent='Acesso Total';
    corResultado.style.color='green';
    document.body.style.backgroundColor='green'; 
 }

})