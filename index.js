/// task1 ///



const logItems = function(array) {
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i+1 , "-" , array[i]);
}
};


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



/// TASK 2


const calculateEngravingPrice = function(message, pricePerWord) {
    let ArrreyCreate = message.split(" ");
    let LengthArrey = ArrreyCreate.length;
    const result = LengthArrey * pricePerWord;
    return result;
};


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); 
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); 

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); 







/// task 3







/// task 4


const formatString = function(str) {
    if (str.length <= 40) {
    return str;
} else {

    return str.slice(0, 40) + '...';
}
};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));


console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);



/// task 5

const checkForSpam = function(message) {
const lowercasedMessage = message.toLowerCase();
return lowercasedMessage.includes('spam') || lowercasedMessage.includes('sale');
};


console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 






//// TASK 6



let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введіть число:');
  
  if (input !== null) {
    const number = Number(input);
    
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert('Було введено не число, перевірте ще раз.');
    }
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Массив чисел пустий. Число не вписано.');
}







