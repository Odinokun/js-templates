document.querySelector('#pushBtn').addEventListener('click', () => {
  let lengthArr = document.querySelector('#lengthArr').value,//длина
    minValue = document.querySelector('#minValue').value,//минимальное значение
    maxValue = document.querySelector('#maxValue').value,//максимальное значение
    outValue = document.querySelector('#out'), //поле для вывода массива
    arr = []; //объявляем массив


  //наполняем массив при помощи цикла
  for (let i = 0; i < lengthArr; i++) {
    arr.push(randomInteger(minValue, maxValue));
  }

  outValue.innerHTML = `<h2>${arr}</h2>`; //выводим массив

  return arr;
});


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}