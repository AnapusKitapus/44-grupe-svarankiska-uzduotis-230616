console.clear();

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

function numberLetter(a, b) {

    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return '=';
    }
}
console.log(numberLetter(12, 4));
console.log(numberLetter(4, 12));
console.log(numberLetter(12, 12));

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 0; i < 5; i++) {
    let numbers = Math.floor(Math.random() * 10) + 1;
    console.log(numbers);
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let numbersLetters = 0;

while (numbersLetters !== 5) {
  numbersLetters = Math.floor(Math.random() * 10) + 1;
  console.log(numbersLetters);
}

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let ilgis = Math.floor(Math.random() * 11) + 25;
let array = [];

for (let i = 0; i < ilgis; i++) {
  let mean = Math.floor(Math.random() * 21) + 10;
  array.push(mean);
}

let value = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > value) {
    value = array[i];
  }
}

console.log('Array:', array);
console.log('Biggest value:', value);

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let arrays = [];
let similar = {'A': 0, 'B': 0, 'C': 0,'D': 0};

for (let i = 0; i < 100; i++) {
  let randomLetter = Math.floor(Math.random() * 4);
  let letters = String.fromCharCode(65 + randomLetter);
 arrays.push(letters);
  similar[letters]++;
}

console.log("Array:", arrays);
console.log("Similarities:", similar);

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function numeroLatino(a, b) {
    if ((typeof a === 'number' && typeof b === 'number') ||(Array.isArray(a) && Array.isArray(b))) {
      if (typeof a === 'number' && typeof b === 'number') {
        const suma = a + b;
        return suma % 2 === 0 ? suma : 'Suma nelyginė.';
      } else {
        const suma = a.length + b.length;
        return suma % 2 === 0 ? suma : 'Suma nelyginė.';
      }
    } else {
      return 'Undefined';
    }
  }

console.log(numeroLatino(12, 4));
console.log(numeroLatino([12, 4]));
console.log(numeroLatino([12, 15], [10, 67]));
console.log(numeroLatino([4, 12], [12, 4, 19]));
console.log(numeroLatino([4, 12], 12, 4));
console.log(numeroLatino([4, 12], 12, 4, 30));

//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)

function phoneNumber(array) {
    if (Array.isArray(array) && array.length === 10) {
      const number = array.join('');
      const formattedNumber = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
      return formattedNumber;
    } 
}
console.log(phoneNumber([3, 7, 0, 6, 4, 5, 2, 1, 9, 8]));