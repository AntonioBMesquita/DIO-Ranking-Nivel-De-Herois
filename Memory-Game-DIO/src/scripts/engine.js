// Array de emojis para serem usados no jogo
const emojis =[
    "🦬",
    "🦬",
    "🦌",
    "🦌",
    "🐃",
    "🐃",
    "🦣",
    "🦣",
    "🐈‍⬛",
    "🐈‍⬛",
    "🦛",
    "🦛",
    "🦏",
    "🦏",
    "🐍",
    "🐍"
];


// Array para armazenar as cartas abertas
let openCards = [];

// Embaralha os emojis de forma aleatória
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Loop para criar os elementos de cada carta
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");  // Cria um elemento div
    box.className = ("item");  // Adiciona a classe "item" à div
    box.innerHTML = shuffleEmojis[i];  // Define o emoji correspondente
    box.onclick = handleClick;  // Define a função a ser chamada quando a carta for clicada
    document.querySelector(".game").appendChild(box);  // Adiciona a carta à div com a classe "game"
}

// Função chamada quando uma carta é clicada
function handleClick() {
    if (openCards.length < 2) {  // Verifica se há menos de 2 cartas abertas
        this.classList.add("boxOpen");  // Adiciona a classe "boxOpen" para mostrar o emoji
        openCards.push(this);  // Adiciona a carta ao array de cartas abertas
    }
    if (openCards.length == 2) {  // Se houver duas cartas abertas
        setTimeout(checkMatch, 500);  // Chama a função checkMatch após 500 ms
    }
}

// Função para verificar se as duas cartas abertas são iguais
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {  // Se os emojis são iguais
        openCards[0].classList.add("boxMatch");  // Adiciona a classe "boxMatch" à primeira carta
        openCards[1].classList.add("boxMatch");  // Adiciona a classe "boxMatch" à segunda carta
    } else {  // Se os emojis são diferentes
        openCards[0].classList.remove("boxOpen");  // Remove a classe "boxOpen" da primeira carta
        openCards[1].classList.remove("boxOpen");  // Remove a classe "boxOpen" da segunda carta
    }
    openCards = [];  // Reseta o array de cartas abertas
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {  // Se todas as cartas combinarem
        alert("Você venceu!");  // Mostra a mensagem de vitória
    }
}
