const btn = document.querySelector('#btn');
const divColors = document.querySelectorAll('.color');
const spnPanel = document.querySelector('span.panel');
const input = document.querySelector('#bid');
const spnResult = document.querySelector('span.result');
const spnNumber = document.querySelector('span.number');
const spnWin = document.querySelector('span.win');
const spnLoss = document.querySelector('span.loss')


let colors = ['crimson', 'darkslategray', 'cornflowerblue'];
let chosedColors = [];
let wallet = 100;

let result = '';
let number = 0;
let win = 0;
let loss = 0;

spnPanel.textContent = wallet + ' $'

const chooseColors = () => {
	if (input.value === "") {
		return alert('Nie podałeś stawki')
	} else if (input.value > wallet) {
		return alert('Nie masz wystarczająco środków')
	}
	if (wallet <= 0) {
		return alert('Przegrałeś')
	}

	divColors.forEach(color => {
		const index = Math.floor(Math.random() * colors.length);
		color.style.backgroundColor = colors[index];
		chosedColors.push(colors[index])
	})

	const value = input.value;
	wallet = wallet - value;

	checkWinner(value)
	number++
	spnNumber.textContent = number;

	spnPanel.textContent = wallet + ' $';
	spnResult.textContent = result;
	spnWin.textContent = win;
	spnLoss.textContent = loss;

	input.value = "";

}

const checkWinner = (value) => {
	if (chosedColors[0] === chosedColors[1] && chosedColors[0] === chosedColors[2]) {
		win++;
		result = `Wygrałeś ${value * 3}$`;
		wallet = wallet + value * 3;
	} else if (chosedColors[0] !== chosedColors[1] && chosedColors[1] !== chosedColors[2] && chosedColors[0] !== chosedColors[2]) {
		win++;
		result = `Wygrałeś ${value * 3}$`
		wallet = wallet + value * 3;
	} else {
		loss++;
		result = `Przegrałeś ${value}$`
	}
	chosedColors.length = 0;
}

btn.addEventListener('click', chooseColors)