const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botoes');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcasenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }
function diminuiTamanho(){
    if(tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }

    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

    for(i=o;i < checkbox.length;i++){
        checkbox[i].onclick = geraSenha;
     }
    geraSenha()
}



for(i=o;i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
botoes(0).onclick = diminuiTamanho;
botoes(1).onclick = aumentaTamanho;

geraSenha();

function geraSenha(){
    {let alfabeto = '';
   if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
}
    let senha ='';
    for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()* alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificasenha();

}

function classificasenha(){
    forcasenha.classList.remove('fraca', 'Media', 'forte');
    if (tamanhoSenha > 11){
        forcasenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12){
        forcasenha.classList.add('media');
    }else if (tamanhoSenha <= 5){
        forcasenha.classList.add('fraca')
    }
        
    
    
}

