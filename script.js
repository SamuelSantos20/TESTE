// 1. Seleção dos elementos (Garanta que os IDs no HTML sejam 'prev' e 'next')
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const container = document.querySelector('.container');
const items = document.querySelectorAll('.list .item');
const dots = document.querySelectorAll('.indicators ul li');
const numberIndicator = document.querySelector('.number');

let active = 0;
let lastPosition = items.length - 1;

// 2. Função Principal de Troca
function setSlider() {
    // Mano, aqui a gente limpa geral pra não ter erro de sobreposição
    items.forEach(item => {
        item.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Ativa o item da vez
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número (01, 02...)
    numberIndicator.innerText = '0' + (active + 1);
    
    console.log("Slide atual:", active); // Aperte F12 no navegador para ver se isso aparece!
}

// 3. Eventos de Clique
nextButton.onclick = () => {
    container.style.setProperty('--calculation', 1);
    active = (active + 1 > lastPosition) ? 0 : active + 1;
    setSlider();
}

prevButton.onclick = () => {
    container.style.setProperty('--calculation', -1);
    active = (active - 1 < 0) ? lastPosition : active - 1;
    setSlider();
}

// Inicializa o primeiro slide no load da página
setSlider();