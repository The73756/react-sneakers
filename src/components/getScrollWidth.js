// Без понятия как это правильно переписать под реакт
(function getScrollWidth() {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  document.querySelector(':root').style.setProperty('--scroll-width', `${scrollWidth + 'px'}`);
  div.remove();
}());