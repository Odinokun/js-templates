document.querySelector('#live-search').oninput = function () {
  // вводимое значение
  let searchVal = this.value;
  // список в котором производится поиск
  let searchingElem = document.querySelectorAll('#live-search-list li');

  // если вводимое значение есть, то...
  if (searchVal !== '') {
    // перебираем элементы
    searchingElem.forEach(function (elem) {
      // RegExp(searchVal,"gi") - позволяет не учитывать регистр
      // если вернулось -1
      if (elem.innerText.search(RegExp(searchVal, "gi")) === -1) {
        elem.classList.add('hide'); // скрываем элемент
        elem.innerHTML = elem.innerText; // удаляем теги <mark> при скрытии элемента
      } else {
        elem.classList.remove('hide'); // показываем элемент

        //***** BEGIN выделения текста
        // берем текстовое содержимое элемента
        let str = elem.innerText;
        // формируем и вставляем html:
        // (до выбранного текста),(тег),выбранный текст,(закрываем тег), остаток текста
        // RegExp(searchVal,"gi") - позволяет не учитывать регистр
        elem.innerHTML = insertMark(str, elem.innerText.search(RegExp(searchVal, "gi")), searchVal.length);
        //***** END выделения текста
      }
    });
  }
  else {
    // если очистили поисковую строку
    searchingElem.forEach(function (elem) {
      // показываем все элементы
      elem.classList.remove('hide');
      // удаляем теги <mark> при скрытии элемента
      elem.innerHTML = elem.innerText;
    })
  }
};

// функция принимает строку самого слова,
// позичию выбранной части слова, длину выбранной части
function insertMark(str, pos, len) {
  // возвращаем: (строку от начала, до выбранной части) + (тег) +
  // (выбранная часть) + (закрывающий тег) + (остаток слова)
  return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len);
}
