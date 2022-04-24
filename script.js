let order = [];
let clikedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 4 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria o array com cores
let shuffleOrder = ()=>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clikedOrder = [];
    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i + 1));
    }
}

//acende a próxima cor
let lightColor = (element, number)=>{
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    }, number - 250)
    setTimeout(()=>{
        element.classList.remove('selected');
    })
}

// checa os btns clicados

let checkOrder = ()=>{
    for(let i in clikedOrder){
        if(clikedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clikedOrder.length == order.length){
        alert(`Pontuação ${score}\n Voce acertou, Iniciando proximo nivel`);
        nextLevel();
    }  
}

// função para clique

let clique = (color)=>{
    clikedOrder[clikedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

}

let createColorElement = (color)=>{
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}

// função para o proximo ivel do jogo
let nextLevel = ()=>{
    score++;
    shuffleOrder();
}

// função para game over
let gameOver = ()=>{
    alert(`Pontuação: ${score}\n Voce perdeu o jogozn CLique em ok para recomeçar`);7
    order = [];
    clikedOrder = [];

    playGame();
}

let playGame = ()=>{
    alert('Bem vindo')
    score = 0

    nextLevel()
}

green.onclick = ()=> clique(0)
red.onclick = ()=> clique(1)
yellow.onclick = ()=> clique(2)
blue.onclick = ()=> clique(3)

playGame()

// green.addEventListener('click', clique(0))
// red.addEventListener('click', clique(1))
// yellow.addEventListener('click', clique(2))
// blue.addEventListener('click', clique(3))
