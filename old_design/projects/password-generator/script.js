const forms = document.querySelector('#password-generator-container');
const resultInput = document.querySelector('#result-input');
const copyButton = document.querySelector('#copy-button');
const lengthInput = document.querySelector('#length-input');
const uppercaseCheckbox = document.querySelector('#uppercase-checkbox');
const numbersCheckbox = document.querySelector('#numbers-checkbox');
const symbolsCheckbox = document.querySelector('#symbols-checkbox');
const generatePasswordButton = document.querySelector('#generate-button');

const copyToClipboard = (event) => {
	event.preventDefault();
	const textToCopy = document.querySelector('#result-input');

	if (textToCopy.value.length > 0) {
		textToCopy.select();
		textToCopy.setSelectionRange(0, 99999);
	
		navigator.clipboard.writeText(textToCopy.value);
	
		return alert('Copiado!');
	}
	
	return alert('Não dá copiar algo vazio né meu querido.');
};

copyButton.addEventListener('click', copyToClipboard);

console.log(String.fromCharCode(33, 34))

const createArrayOfNumbers = (firstNumber, lastNumber) => {
	const array = []

	for (let index = firstNumber; index <= lastNumber; index += 1) {
		array.push(index);
	}

	return array;
}

const uppercaseCodes = createArrayOfNumbers(65, 90);
const lowercaseCodes = createArrayOfNumbers(97, 122);
const numberCodes = createArrayOfNumbers(48, 57);
const symbolsCode = createArrayOfNumbers(33, 47).concat(createArrayOfNumbers(58, 64))
.concat(createArrayOfNumbers(91, 96)).concat(createArrayOfNumbers(123, 126));
// The concat() method is used to merge two or more arrays. So the function is called and then the concat() is merging then into a single array.

const generatePassword = (charAmount, includeUppercase, includeNumbers, includeSymbols) => {
	let charCodes = lowercaseCodes;
	const password = []

	if (includeUppercase) {
		charCodes = charCodes.concat(uppercaseCodes);
	}
	if (includeNumbers) {
		charCodes = charCodes.concat(numberCodes);
	}
	if (includeSymbols) {
		charCodes = charCodes.concat(symbolsCode);
	}

	for (let index = 0; index < charAmount; index += 1) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] // O characterCode, a cada iteração, vai receber o número que está na determinada posição que foi gerada aleatoriamente. Esse "Math.floor(Math.random() * charCodes.length)" dentro do charCodes significa que estamos gerando um número aleatório, cujo limite é o length do charCodes, e arredondando-o para baixo. Isso irá gerar um determinado número, como isso está dentro do charCodes[], o characterCode, vai receber o número que está naquela posição.
		password.push(String.fromCharCode(characterCode)); // O fromCharCode vai transformar o número que está dentro do characterCode no seu respectivo caracter ASCII.
	}

	return password.join('');	
}

generatePasswordButton.addEventListener('click', (event) => {
	event.preventDefault();

	const passwordLength = lengthInput.value;
	const includeUppercase = uppercaseCheckbox.checked;
	const includeNumbers = numbersCheckbox.checked;
	const includeSymbols = symbolsCheckbox.checked;

	const password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);

	resultInput.value = password;
})