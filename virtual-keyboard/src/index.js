import './assets/styles/style.css';
import './assets/styles/style.scss';
import 'normalize.css';
import * as buttonMeaning from './assets/KeyboardLayout';

const currenLanguage = 'ru';
const numberOfBtnsInLine = [14, 13];
const numberOfLine = numberOfBtnsInLine.length;

function getButtonStatesEn(currentBtn, line) {
  const upper = 1;
  const lower = 0;
  const result = [];

  const spanUpper = document.createElement('span');
  spanUpper.className = 'uppercase';
  spanUpper.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][upper])[currentBtn];

  const spanLower = document.createElement('span');
  spanLower.className = 'lowercase';
  spanLower.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][lower])[currentBtn];

  const spanCapslock = document.createElement('span');
  spanCapslock.className = 'capslock';
  spanCapslock.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][upper])[currentBtn];

  const spanShift = document.createElement('span');
  spanShift.className = 'shift';
  spanShift.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][upper])[currentBtn];

  result.push(spanUpper, spanLower, spanCapslock, spanShift);
  return result;
}

function getButtonStatesRu(currentBtn, line) {
  const upper = 1;
  const lower = 0;
  const result = [];

  const spanUpper = document.createElement('span');
  spanUpper.className = 'uppercase';
  spanUpper.classList.add('hidden');
  spanUpper.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineRu[line][upper])[currentBtn];

  const spanLower = document.createElement('span');
  spanLower.className = 'lowercase';
  spanLower.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineRu[line][lower])[currentBtn];

  const spanCapslock = document.createElement('span');
  spanCapslock.className = 'capslock';
  spanCapslock.classList.add('hidden');
  spanCapslock.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineRu[line][upper])[currentBtn];

  const spanShift = document.createElement('span');
  spanShift.className = 'shift';
  spanShift.classList.add('hidden');
  spanShift.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineRu[line][upper])[currentBtn];

  result.push(spanUpper, spanLower, spanCapslock, spanShift);
  return result;
}

function getListButton(numberOfBtnsInLines, line) {
  const result = [];

  for (let i = 1; i <= numberOfBtnsInLines; i += 1) {
    const div = document.createElement('div');
    div.className = 'key';
    div.setAttribute('data', Object.keys(buttonMeaning.codeOfBtnInLineRu[line][0])[i - 1]);
    const spanEn = document.createElement('span');
    spanEn.className = 'en';
    const spanRu = document.createElement('span');
    spanRu.className = 'ru';
    if (currenLanguage === 'ru') {
      spanEn.classList.add('hidden');
    } else if (currenLanguage === 'en') {
      spanRu.classList.add('hidden');
    }

    spanEn.append(...getButtonStatesEn(i - 1, line));
    spanRu.append(...getButtonStatesRu(i - 1, line));
    div.append(spanRu, spanEn);
    result.push(div);
  }
  return result;
}

function getBtnLine(numberOfLines, numberOfBtnsInLines) {
  const result = [];

  for (let i = 0; i < numberOfLines; i += 1) {
    const LineBtns = document.createElement('div');
    LineBtns.className = 'lineBtns';
    LineBtns.append(...getListButton(numberOfBtnsInLines[i], i + 1));
    result.push(LineBtns);
  }
  return result;
}

function createBodyTemplate(numberOfBtnsInLines, numberOfLines) {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const container = document.createElement('div');
  container.className = 'container';

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  const display = document.createElement('div');
  display.className = 'display';
  const title = document.createElement('p');
  title.className = 'title';
  title.innerHTML = 'Персональный детский компьютер!';

  const inputField = document.createElement('textarea');
  inputField.className = 'inputField';
  inputField.autofocus = true;

  display.append(title, inputField);
  keyboard.append(...getBtnLine(numberOfLines, numberOfBtnsInLines));
  container.append(display, keyboard);
  wrapper.append(container);
  document.body.append(wrapper);
}

createBodyTemplate(numberOfBtnsInLine, numberOfLine);

document.onkeydown = function makeBtnPressed(event) {
  event.preventDefault();
  const pressedButton = document.querySelector(`[data='${event.code}']`);
  pressedButton.classList.add('press');
  setTimeout(() => {
    pressedButton.classList.remove('press');
  }, 200);
};

function addTextToField(symbol) {
  const inpitField = document.querySelector('.inputField');
  if (symbol === 'Backspace') {
    inpitField.innerHTML = inpitField.innerHTML.slice(0, -1);
  } else if (symbol === 'Tab') {
    inpitField.innerHTML += '    ';
  } else {
    inpitField.innerHTML += symbol;
  }
  inpitField.focus();
  const selectionStart = inpitField.innerHTML.length;
  const selectionEnd = inpitField.innerHTML.length;
  console.log(selectionEnd);
  inpitField.setSelectionRange(selectionStart, selectionEnd);
  inpitField.onclick = () => {
    // inpitField.setRangeText('ПРИВЕТ', inpitField.selectionStart, inpitField.selectionEnd, 'end');
    inpitField.focus();
    console.log('сработало');
    console.log(inpitField.selectionEnd);
    inpitField.setRangeText('ПРИВЕТ', inpitField.selectionStart, inpitField.selectionEnd, 'end');
    console.log(inpitField.selectionEnd);
    console.log(document.getElementsByClassName('inputField'));
  };
}
/*
document.querySelector('.inputField').onfocus = () => {
  setTimeout(() => {
    document.querySelector('.inputField').setSelectionRange(0, 1);
  });
};
document.querySelector('textarea').addEventListener('focus', function thf() {
  // this.select();
  this.focus();
  this.selectionStart = 10;
  console.log(document.querySelector('.inputField'));
});
*/

function getSymbolFromVirtualKeyboard(item) {
  if (item.childNodes[0].classList.contains('hidden')) {
    if (!item.childNodes[1].childNodes[0].classList.contains('hidden')) {
      addTextToField(item.childNodes[1].childNodes[0].textContent);
    }
    if (!item.childNodes[1].childNodes[1].classList.contains('hidden')) {
      addTextToField(item.childNodes[1].childNodes[1].textContent);
    }
    if (!item.childNodes[1].childNodes[2].classList.contains('hidden')) {
      addTextToField(item.childNodes[1].childNodes[2].textContent);
    }
    if (!item.childNodes[1].childNodes[3].classList.contains('hidden')) {
      addTextToField(item.childNodes[1].childNodes[3].textContent);
    }
  } else {
    if (!item.childNodes[0].childNodes[0].classList.contains('hidden')) {
      addTextToField(item.childNodes[0].childNodes[0].textContent);
    }
    if (!item.childNodes[0].childNodes[1].classList.contains('hidden')) {
      addTextToField(item.childNodes[0].childNodes[1].textContent);
    }
    if (!item.childNodes[0].childNodes[2].classList.contains('hidden')) {
      addTextToField(item.childNodes[0].childNodes[2].textContent);
    }
    if (!item.childNodes[0].childNodes[3].classList.contains('hidden')) {
      addTextToField(item.childNodes[0].childNodes[3].textContent);
    }
  }
}

document.querySelectorAll('.key').forEach((item) => {
  item.addEventListener('click', () => {
    item.getAttribute('data');
    item.classList.add('press');
    getSymbolFromVirtualKeyboard(item);
    setTimeout(() => {
      item.classList.remove('press');
    }, 200);
  });
});

document.onkeyup = function catchSymbolFromRealKeyboard(event) {
  getSymbolFromVirtualKeyboard(document.querySelector(`[data='${event.code}']`));
};

document.querySelector('textarea').addEventListener('click', (event) => {
  event.preventDefault();
});
