var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado!";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O player 2 venceu!";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O player 1 venceu";
        }
    }

    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O player 1 venceu";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado!";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O player 2 venceu!";
        }
    }

    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O player 2 venceu!";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O player 1 venceu";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo empatou!";
        }
    }

}

function resetInimigo(){
    const enemenyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemenyOptions.length; i++){
        enemenyOptions[i].childNodes[0].style.opacity = 0.3;
        }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemenyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();

    for(var i = 0; i < enemenyOptions.length; i++){
        if(i == rand){
            enemenyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemenyOptions[i].childNodes[0].getAttribute('opt')
        }
    }
     
    validarVitoria();

}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        
        inimigoJogar();
    })
}