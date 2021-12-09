// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
//   Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//generare 5 num casuali
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//partiamo creando l'array con un ciclo
// const numbers = [];
// while (numbers.length < 5) {
//   let number = getRandomIntInclusive(1, 99);
//   if (numbers.includes(number) == false) {
//     numbers.push(number);
//   }
// }

//qui abbiamo provato a creare una funzione che gestisca assieme numrandom e prompt ma e' un po' complicata come soluzione e troppo legata a questo caso specifico
// function generateArray(element, typeElement) {

//   const numbers = [];
//   while (numbers.length < element) {
//     let number;

//     if (typeElement == 'prompt') {
//       number = prompt('inserisci un numero');
//     } else if (typeElement == 'random') {
//       number = getRandomIntInclusive(1, 99);
//     }

//     if (numbers.includes(number) == false) {
//       numbers.push(number);
//     }
//   }
//   return numbers;
// }

// funzione che crea un array numeri random
function generateArrayNumberRandom(elements, min, max) {
  const numbers = [];
  while (numbers.length < elements) {
    let number = getRandomIntInclusive(min, max);
    if (numbers.includes(number) == false) {
      numbers.push(number);
    }
  }
  return numbers;
}

// funzione che genera un array da numeri inseriti in prompt
function generateArrayPrompt(elements) {
  const numbers = [];
  while (numbers.length < elements) {
    let number = parseInt(prompt('Inserisci un numero'));
    if (numbers.includes(number) == false) {
      numbers.push(number);
    }
  }
  return numbers;
}

//avvio il gioco
const numbers = generateArrayNumberRandom(5, 1, 99);
console.log(numbers);

const container = document.getElementById('numbers');
container.innerHTML = numbers;

//primo setTimeout
setTimeout(function () {
  container.innerHTML = '';

  //secondo per far comparire il prompt dopo che e' stato cancellato il DOM
  setTimeout(function () {
    const numbersUser = generateArrayPrompt(5);
    const numberGuessed = [];
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      if (numbersUser.includes(element)) {
        numberGuessed.push(element);
      }
    }
    container.innerHTML = `Hai indovinato ${numberGuessed.length} numeri`;
  }, 1000);

}, 3000)


//Altra versione
// const numbers = [];
// while (numbers.length < 5) {
//   let number = getRandomIntInclusive(1, 99);
//   if (numbers.includes(number) == false) {
//     numbers.push(number);
//   }
// }
// const container = document.getElementById('numbers');
// container.innerHTML = numbers;

// setTimeout(function () {
//   container.innerHTML = '';
// }, 1000);

// setTimeout(function () {
//   const numbersUser = [];
//   for (let i = 0; i < 5; i++) {
//     const number = parseInt(prompt('inserisci un numero'));
//     if (numbers.includes(number)) {
//       numbersUser.push(number);
//     }
//   }

//   container.innerHTML = `Hai indovinato ${numbersUser.length} numeri`;
// }, 4000);



//possibile check valore inserito
// true && true
// true || true false
// while (isNaN(num) || num < 0) {
//   if( )
// }