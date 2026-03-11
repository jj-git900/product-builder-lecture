class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const color = this.getColorForNumber(parseInt(number, 10));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: white;
                    background: radial-gradient(circle at 30% 30%, white, ${color});
                    box-shadow: 0 5px 10px rgba(0,0,0,0.3), inset 0 -2px 5px rgba(0,0,0,0.5);
                    transform: scale(0);
                    animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                @keyframes pop-in {
                    to { transform: scale(1); }
                }
            </style>
            <span>${number}</span>
        `;
    }

    getColorForNumber(number) {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Gray
        return '#b0d840';      // Green
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoDisplay = document.getElementById('lotto-display');
const historyList = document.getElementById('history-list');

function generateNumbers() {
    const numbers = new Set();
    while(numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    lottoDisplay.innerHTML = '';
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const ball = document.createElement('lotto-ball');
            ball.setAttribute('number', number);
            lottoDisplay.appendChild(ball);
        }, index * 200);
    });
}

function updateHistory(numbers) {
    const listItem = document.createElement('li');
    const numbersString = numbers.join(', ');
    listItem.innerHTML = `<span>${numbersString}</span> <small>${new Date().toLocaleTimeString()}</small>`;
    historyList.prepend(listItem);
    if(historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
    updateHistory(numbers);
});
