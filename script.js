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
    time = time * 500;
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
            lose();
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
    })

    checkOrder();
}