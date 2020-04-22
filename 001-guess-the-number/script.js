function random(maxNumber) {
  return Math.ceil(Math.random() * maxNumber);
}

let firstQuestion = 'Привет! Как тебя зовут?';
let name = prompt(firstQuestion); //узнаем имя юзера
let number = random(100); //задаем максимальное число
let numberOfGuesses = 1; //количество попыток угадывания


//проверяем поле на заполненность и минимальную длину
while (name === null || name === '' || name.length <= 2) {
  name = prompt(firstQuestion);
}

//рассказываем правила игры
alert(name + ', я загадал число от 1 до 100. Попробуй угадать его за минимальное количество попыток. После каждой попытки я буду говорить "слишком много" или "слишком мало".');

let guess = prompt('Какое число я загадал?'); //спрашиваем, какое число было загадано

//процесс угадывания
while (+guess !== +number) {
  numberOfGuesses++; //увеличиваем счетчик попыток

  if (guess > number) {
    guess = prompt('Слишком много. Пробуй еще.');
  } else if (guess < number) {
    guess = prompt('Слишком мало. Пробуй еще.');
  }
}

alert('Ты угадал число!!! Это - ' + number + '! Количество попыток - ' + numberOfGuesses + '.');