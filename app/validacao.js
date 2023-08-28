function verificaChute(chute){
    const numero = +chute;

    if(chute === 'game over'){
        document.body.innerHTML = `<h1>GAME OVER</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
        document.body.style.backgroundColor = "var(--background-gameover)"
        document.body.style.color = "var(--background-color)"
        document.body.style.fontWeight = "900"
        document.getElementById('jogar-novamente').style.backgroundColor = "var(--background-color)"
    }
    else if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }
    else if(numeroForaDosLimites(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    else if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } 
    else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDosLimites(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id = 'jogar-novamente'){
        window.location.reload();
    }
})