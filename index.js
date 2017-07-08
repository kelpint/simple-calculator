//index.js
let res = 0;
let pend = '0';
let hold = null;
let oper = null;

let counter = 0;
document.getElementById('num1').onclick = function() {
  pend = pend + '1';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num2').onclick = function() {
  pend = pend + '2';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num3').onclick = function() {
  pend = pend + '3';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num4').onclick = function() {
  pend = pend + '4';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num5').onclick = function() {
  pend = pend + '5';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num6').onclick = function() {
  pend = pend + '6';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num7').onclick = function() {
  pend = pend + '7';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num8').onclick = function() {
  pend = pend + '8';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num9').onclick = function() {
  pend = pend + '9';
  document.getElementById('count').innerText = String(pend);
}
document.getElementById('num0').onclick = function() {
  pend = pend + '0';
  document.getElementById('count').innerText = String(pend);
}

document.getElementById('add').onclick = function() {
  hold = Number(pend);
  pend = '0';
  op = '+';
  document.getElementById('count').innerText = String(pend);
}
