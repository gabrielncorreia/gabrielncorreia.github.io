const buttonToSentenceCase = document.querySelector('#toSentenceCase')
const buttonToLowerCase = document.querySelector('#toLowerCase')

const buttonToUpperCase = document.querySelector('#toUpperCase')
const buttonCapitalizedCase = document.querySelector('#toCapitalizedCase')
const buttonCopyToClipboard = document.querySelector('#copyToClipboard')
const buttonClear = document.querySelector('#clearButton');

const warning = () => {
  alert('Digite algo!')
}

const sentenceCase = () => {
  const textarea = document.querySelector('#textarea')

  if (textarea.value.length === 0) return warning()

  let sentenceCasedText = textarea.value.toLowerCase()
  .split("  ") // tres espaços vai juntar todas as palavras em um único array
  .map((word) => (word.charAt(0).toUpperCase() + word.slice(1))) // o word.charAt(0) significa que queremos transformar o índice zero, a primeira palavra, em maiúscula, enquanto o word.slice(1) significa que querendo o restante do array a partir do índice 1
  // .join(" "); // o join seria necessário se usassemos somente um espaço no split() e caso estivessemos querendo capitalizar todas as primeiras letras das palavras

  textarea.value = sentenceCasedText;
  // console.log(sentenceCasedText)
}

buttonToSentenceCase.addEventListener('click', sentenceCase)

const toLowerCase = () => {
  const textarea = document.querySelector('#textarea');

  if (textarea.value.length === 0) return warning()

  const lowerCase = textarea.value.toLowerCase();

  return textarea.value = lowerCase;
}

buttonToLowerCase.addEventListener('click', toLowerCase)

const toUpperCase = () => {
  const textarea = document.querySelector('#textarea');

  if (textarea.value.length === 0) return warning()

  const upperCase = textarea.value.toUpperCase();

  return textarea.value = upperCase;
}

buttonToUpperCase.addEventListener('click', toUpperCase)

const capitalizedCase = () => {
  const textarea = document.querySelector('#textarea');

  if (textarea.value.length === 0) return warning()

  // Fiz esse código baseado nesse: https://stackoverflow.com/questions/64489395/converting-string-to-title-case-in-javascript
  let capitalizedText = textarea.value.toLowerCase()
  .split(" ")
  .map((word) => (word.charAt(0).toUpperCase() + word.slice(1)))
  .join(" "); // o join seria necessário se usassemos somente um espaço no split()

  textarea.value = capitalizedText;
}

buttonCapitalizedCase.addEventListener('click', capitalizedCase)

const copyToClipboard = () => {
  const textarea = document.querySelector('#textarea');

  if (textarea.value.length === 0) {
    return warning()
  }
  
  // Select the text field
  textarea.select(); 
  textarea.setSelectionRange(0, 99999)

  // Copy the text inside the text field
  navigator.clipboard.writeText(textarea.value)

  alert("Texto copiado!")
}

buttonCopyToClipboard.addEventListener('click', copyToClipboard)


const clear = () => {
  const textarea = document.querySelector('#textarea');

  if (textarea.value.length === 0) return warning()

  const lowerCase = textarea.value.toLowerCase();

  return textarea.value = '';
}

buttonClear.addEventListener('click', clear)