(function () {
  const ul = document.getElementById('ulId');
  const li = ul.getElementsByTagName('li');

  for (const element of li) {
    console.log(element.textContent);
  }

  console.log(`Количество элементов: ${li.length}`);

  const text = [];
  for (const element of li) {
    text.push(element.textContent);
  }

  console.log(text);
}());
