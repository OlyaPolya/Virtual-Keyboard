import './assets/styles/style.css';
import './assets/styles/style.scss';
import 'normalize.css';
import * as buttonMeaning from './assets/KeyboardLayout';

let currenLanguage = 'ru';
if (localStorage.getItem('currenLanguage') !== null) {
  currenLanguage = localStorage.getItem('currenLanguage');
}

const numberOfBtnsInLine = [14, 14, 13, 13, 9];
const numberOfLine = numberOfBtnsInLine.length;

function getButtonStatesEn(currentBtn, line) {
  const upper = 1;
  const lower = 0;
  const result = [];

  const spanUpper = document.createElement('span');
  spanUpper.className = 'uppercase';
  spanUpper.classList.add('hidden');
  spanUpper.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][upper])[currentBtn];

  const spanLower = document.createElement('span');
  spanLower.className = 'lowercase';
  spanLower.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][lower])[currentBtn];

  const spanCapslock = document.createElement('span');
  spanCapslock.className = 'capslock';
  spanCapslock.classList.add('hidden');
  spanCapslock.innerHTML = Object.values(buttonMeaning.codeOfBtnInLineEn[line][upper])[currentBtn];

  const spanShift = document.createElement('span');
  spanShift.className = 'shift';
  spanShift.classList.add('hidden');
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
  title.innerHTML = '&nbsp';

  const inputField = document.createElement('textarea');
  inputField.className = 'inputField';
  inputField.autofocus = true;
  inputField.style.resize = 'none';
  inputField.placeholder = 'Для переключения языка используйте левые Ctrl + Shift.\r\nCоздана в операционной системе Windows ;)';

  display.append(title, inputField);
  keyboard.append(...getBtnLine(numberOfLines, numberOfBtnsInLines));
  container.append(display, keyboard);
  wrapper.append(container);
  document.body.append(wrapper);
}

createBodyTemplate(numberOfBtnsInLine, numberOfLine);
const caps = document.querySelector('[data="CapsLock"] .ru');
const caps2 = document.querySelector('[data="CapsLock"] .en');
caps.classList.remove('ru');
caps2.classList.remove('en');

document.onkeydown = function makeBtnPressed(event) {
  event.preventDefault();
  const pressedButton = document.querySelector(`[data='${event.code}']`);
  pressedButton.classList.add('press');
  setTimeout(() => {
    pressedButton.classList.remove('press');
  }, 200);
};

function switchUpperCase() {
  const currentlanguageRu = document.querySelectorAll('.ru');
  const firstEl = 0;
  const uppercaseClassRu = document.querySelectorAll('.ru .uppercase');
  const lowercaseClassRU = document.querySelectorAll('.ru .lowercase');
  const currentlanguageEn = document.querySelectorAll('.en');

  const uppercaseClassEn = document.querySelectorAll('.en .uppercase');
  const lowercaseClassEn = document.querySelectorAll('.en .lowercase');
  if (!currentlanguageRu[firstEl].classList.contains('hidden')) {
    uppercaseClassRu.forEach((el) => {
      el.classList.toggle('hidden');
    });
    lowercaseClassRU.forEach((el) => {
      el.classList.toggle('hidden');
    });
  }
  if (!currentlanguageEn[firstEl].classList.contains('hidden')) {
    uppercaseClassEn.forEach((el) => {
      el.classList.toggle('hidden');
    });
    lowercaseClassEn.forEach((el) => {
      el.classList.toggle('hidden');
    });
  }
}

function addTextToField(symbol) {
  const inpitField = document.querySelector('.inputField');
  if (symbol === 'Backspace') {
    inpitField.innerHTML = inpitField.innerHTML.slice(0, -1);
  } else if (symbol === 'Tab') {
    inpitField.innerHTML += '    ';
  } else if (symbol === 'Win' || symbol === 'Alt' || symbol === 'Ctrl') {
    inpitField.innerHTML += '';
  } else if (symbol === 'Shift') {
    inpitField.innerHTML += '';
  } else if (symbol === 'Enter') {
    inpitField.innerHTML += '\r\n';
  } else if (symbol === 'CapsLock') {
    inpitField.innerHTML += '';
    switchUpperCase();
  } else {
    inpitField.innerHTML += symbol;
  }
  inpitField.focus();
  const selectionStart = inpitField.innerHTML.length;
  const selectionEnd = inpitField.innerHTML.length;
  inpitField.setSelectionRange(selectionStart, selectionEnd);
}

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

function listenClickAtVirtKeyboard() {
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
}
listenClickAtVirtKeyboard();

document.onkeyup = function catchSymbolFromRealKeyboard(event) {
  getSymbolFromVirtualKeyboard(document.querySelector(`[data='${event.code}']`));
};

function changeKeyboardLayout() {
  const currenLanguageEn = document.querySelectorAll('.en');
  const classesEn = document.querySelectorAll('.en span');
  const currenLanguageRU = document.querySelectorAll('.ru');
  currenLanguageEn.forEach((en) => {
    if (en.classList.contains('hidden')) {
      currenLanguageRU.forEach((ru) => {
        ru.classList.add('hidden');
      });
      en.classList.remove('hidden');
      classesEn.forEach((item) => {
        if (item.classList.contains('uppercase') || item.classList.contains('capslock') || item.classList.contains('shift')) {
          item.classList.add('hidden');
        }
      });
      localStorage.setItem('currenLanguage', 'en');
    } else {
      en.classList.add('hidden');
      currenLanguageRU.forEach((ru) => {
        ru.classList.remove('hidden');
      });
      localStorage.setItem('currenLanguage', 'ru');
    }
  });
}

function startLanguageChange(...codes) {
  const btnCodes = new Set();
  document.addEventListener('keydown', (event) => {
    btnCodes.add(event.code);
    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!btnCodes.has(code)) {
        return;
      }
    }
    btnCodes.clear();
    changeKeyboardLayout();
  });
  document.addEventListener('keyup', (event) => {
    btnCodes.delete(event.code);
  });
}
startLanguageChange('ControlLeft', 'ShiftLeft');

document.querySelector('textarea').addEventListener('click', (event) => {
  event.preventDefault();
});
