let jogosAlugados = 0;

function alterarStatus (id){
    let gameStatus = document.getElementById(`game-${id}`);
    let imagem = gameStatus.querySelector('.dashboard__item__img');
    let botao = gameStatus.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameStatus.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você realmente está devolvendo o jogo ${nomeDoJogo.textContent} ?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
        }
    } else{
        imagem.classList.add ('dashboard__item__img--rented');
        botao.classList.add ('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarJogosAlugados();
}

function contarJogosAlugados(){
    console.log(`Total de jogos alugados é ${jogosAlugados}`);
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});