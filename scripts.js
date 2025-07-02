
//numero secreto
function executarExemplo1() {
    //gera o numeor aleatorio
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
    let acertou = false;
    
    alert("Bem-vindo ao Jogo do Numero Secreto!\nTente adivinhar o numero entre 1 e 10.");
    
    while (!acertou) {
        const palpite = prompt("Digite seu palpite:");
        
        //condicao de cancelamento
        if (palpite === null) {
            alert("Jogo cancelado. O numero secreto era " + numeroSecreto + ".");
            return;
        }
        
        //validacao
        const numeroPalpite = parseInt(palpite);
        
        if (isNaN(numeroPalpite) || palpite > 10) {
            alert("Por favor, digite um numero valido.");
            continue;
        }
        
        tentativas++;
        
        if (numeroPalpite === numeroSecreto) {
            acertou = true;
            alert("Parabéns! Você acertou o número secreto " + numeroSecreto + " em " + tentativas + " tentativas!");
        } else if (numeroPalpite < numeroSecreto) {
            alert("O número secreto é maior que " + numeroPalpite + ". Tente novamente!");
        } else {
            alert("O número secreto é menor que " + numeroPalpite + ". Tente novamente!");
        }
    }
}

//calculo de media
function executarExemplo2() {
    alert("Bem-vindo ao Calculador de Média!\nVocê deverá inserir 4 notas e veremos se você foi aprovado.");
    
    let soma = 0;
    let quantidadeNum = 0;
    quantidadeNum = prompt("Digite quantos numeros voce quer fazer a")
    
    for (let i = 1; i <= quantidadeNotas; i++) {
        let numValido = false;
        let num;
        
        while (!numValido) {
            num = prompt("Digite o numero " + i + " ");
            
            //condicao de cancelamento
            if (num === null) {
                alert("Operação cancelada.");
                return;
            }
            
            num = parseFloat(num);
            
            if (isNaN(num) || num < 0 ) {
                alert("Por favor, digite uma numero valido. ");
            } else {
                numValida = true;
                soma += num;
            }
        }
    }
    
    const media = soma / quantidadeNum;
    let mensagem = "A media dos numeros e " + media.toFixed(2) + ". ";
    
    
    alert(mensagem);
}

//Soma dos nomeros
function executarExemplo3() {
    alert("Bem-vindo ao Somador de Numeros!\nVoce podera somar quantos numeros quiser.");
    
    let continuar = true;
    let soma = 0;
    let quantidade = 0;
    
    while (continuar) {
        let numeroValido = false;
        let numero;
        
        while (!numeroValido) {
            numero = prompt("Digite um numero para somar (ou deixe em branco para encerrar):");
            
            // condicao de cancelamento
            if (numero === null || numero.trim() === "") {
                continuar = false;
                break;
            }
            
            numero = parseFloat(numero);
            
            if (isNaN(numero)) {
                alert("Por favor, digite um numero valido.");
            } else {
                numeroValido = true;
                soma += numero;
                quantidade++;
            }
        }
    }
    
    if (quantidade > 0) {
        alert("Voce somou " + quantidade + " numeros.\nTotal da soma: " + soma.toFixed(2));
    } else {
        alert("Nenhum numero foi somado.");
    }
}