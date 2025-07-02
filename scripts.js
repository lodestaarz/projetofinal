
// Exemplo 1 - Jogo dos números secretos com alert
function executarExemplo1() {
    // Gerar um número aleatório entre 1 e 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;
    
    alert("Bem-vindo ao Jogo do Número Secreto!\nTente adivinhar o número entre 1 e 100.");
    
    while (!acertou) {
        const palpite = prompt("Digite seu palpite:");
        
        // Verificar se o usuário cancelou
        if (palpite === null) {
            alert("Jogo cancelado. O número secreto era " + numeroSecreto + ".");
            return;
        }
        
        // Converter para número e validar
        const numeroPalpite = parseInt(palpite);
        
        if (isNaN(numeroPalpite)) {
            alert("Por favor, digite um número válido.");
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

// Exemplo 2 - Criar um jogo para cálculo de média
function executarExemplo2() {
    alert("Bem-vindo ao Calculador de Média!\nVocê deverá inserir 4 notas e veremos se você foi aprovado.");
    
    let soma = 0;
    const quantidadeNotas = 4;
    
    for (let i = 1; i <= quantidadeNotas; i++) {
        let notaValida = false;
        let nota;
        
        while (!notaValida) {
            nota = prompt("Digite a nota " + i + " (entre 0 e 10):");
            
            // Verificar se o usuário cancelou
            if (nota === null) {
                alert("Operação cancelada.");
                return;
            }
            
            nota = parseFloat(nota);
            
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Por favor, digite uma nota válida entre 0 e 10.");
            } else {
                notaValida = true;
                soma += nota;
            }
        }
    }
    
    const media = soma / quantidadeNotas;
    let mensagem = "Sua média é " + media.toFixed(2) + ". ";
    
    if (media >= 7) {
        mensagem += "Parabéns, você foi aprovado!";
    } else if (media >= 5) {
        mensagem += "Você está de recuperação.";
    } else {
        mensagem += "Infelizmente você foi reprovado.";
    }
    
    alert(mensagem);
}

// Exemplo 3 - Soma dos números
function executarExemplo3() {
    alert("Bem-vindo ao Somador de Números!\nVocê poderá somar quantos números quiser.");
    
    let continuar = true;
    let soma = 0;
    let quantidade = 0;
    
    while (continuar) {
        let numeroValido = false;
        let numero;
        
        while (!numeroValido) {
            numero = prompt("Digite um número para somar (ou deixe em branco para encerrar):");
            
            // Se o usuário cancelou ou deixou em branco, encerra
            if (numero === null || numero.trim() === "") {
                continuar = false;
                break;
            }
            
            numero = parseFloat(numero);
            
            if (isNaN(numero)) {
                alert("Por favor, digite um número válido.");
            } else {
                numeroValido = true;
                soma += numero;
                quantidade++;
            }
        }
    }
    
    if (quantidade > 0) {
        alert("Você somou " + quantidade + " números.\nTotal da soma: " + soma.toFixed(2));
    } else {
        alert("Nenhum número foi somado.");
    }
}