(function () {
  const ul = document.getElementById('ulId');
  const li = ul.getElementsByTagName('li');

  const attributeUl = Array.from(ul.attributes);
  const attrValue = attributeUl.map(item => item.value);
  console.log(attrValue);

  const attrName = attributeUl.map(item => item.name);
  console.log(attrName);

  const lastLi = li[li.length - 1];
  lastLi.innerHTML = 'Привет меня зовут Джони';
  lastLi.textContent = 'Привет меня зовут Валерий';

  const firstLi = li[0];
  firstLi.setAttribute('data-my-name', 'Valeriy');

  ul.removeAttribute('data-dog-tail');
}());
