// Variável global para rastrear a pontuação
let pontuacao = 0;
// IDs dos passos que representam uma resposta CORRETA
const passosDeAcerto = [
    'passo-2',  // FASE 1: Lamborghini
    'passo-5',  // FASE 2: Porsche 911
    'passo-8',  // FASE 3: W16
    'passo-11', // FASE 4: Nissan GT-R
    'passo-13', // FASE 5: V8 Central
    'passo-17', // FASE 6: Fibra de Carbono
    'passo-19', // FASE 7: Toyota Supra
    'passo-23'  // FASE 8: Aston Martin
];

/**
 * Função para mostrar o próximo "passo" do quiz.
 * @param {string} proximoId O ID do próximo passo a ser exibido.
 */
function mostrarPasso(proximoId) {
    const passoAtual = document.querySelector('.passo.ativo');
    const proximoPasso = document.getElementById(`passo-${proximoId}`);

    if (passoAtual) {
        // Desativa o passo atual
        passoAtual.classList.remove('ativo');
        
        // Verifica se o passo atual era um acerto antes de sair dele e adiciona o ponto
        if (passosDeAcerto.includes(passoAtual.id)) {
            pontuacao++;
        }
    }

    if (proximoPasso) {
        // Ativa o próximo passo
        proximoPasso.classList.add('ativo');

        // Se for o passo final (id=24), exibe a pontuação
        if (proximoId === '24') {
            document.getElementById('pontuacao-display').textContent = pontuacao;
        }
    }
}

/**
 * Função para recomeçar o quiz do primeiro passo e zerar a pontuação.
 */
function recomecarQuiz() {
    // Zera a pontuação
    pontuacao = 0;

    // Remove a classe 'ativo' do passo final (ou qualquer passo atual)
    const passoAtual = document.querySelector('.passo.ativo');
    if (passoAtual) {
        passoAtual.classList.remove('ativo');
    }

    // Volta para o primeiro passo
    const primeiroPasso = document.getElementById('passo-0');
    if (primeiroPasso) {
        primeiroPasso.classList.add('ativo');
    }
}

// ----------------------------------------------------
// Event Listeners
// ----------------------------------------------------

// Adiciona um listener para todos os botões com a classe 'btn-proximo'
document.addEventListener('DOMContentLoaded', () => {
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    
    botoesProximo.forEach(button => {
        button.addEventListener('click', () => {
            // Pega o valor do atributo data-proximo para saber para onde ir
            const proximoPassoId = button.getAttribute('data-proximo');
            if (proximoPassoId) {
                mostrarPasso(proximoPassoId);
            }
        });
    });
});