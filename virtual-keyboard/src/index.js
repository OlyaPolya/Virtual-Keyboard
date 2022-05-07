import './assets/styles/style.css';
import './assets/styles/style.scss';
import 'normalize.css';
import * as buttonMeaning from './assets/KeyboardLayout';

const currenLanguage = 'ru';
const numberOfBtnsInLine = [13, 13];
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
  const monitor = document.createElement('textarea');
  monitor.className = 'monitor';
  display.append(title, monitor);

  keyboard.append(...getBtnLine(numberOfLines, numberOfBtnsInLines));
  container.append(display, keyboard);
  wrapper.append(container);
  document.body.append(wrapper);
}

// const pickRussian = document.querySelectorAll('.ru');

createBodyTemplate(numberOfBtnsInLine, numberOfLine);

document.onkeydown = function makeBtnPressed(event) {
  //  console.log(event.code);
  const pressedButton = document.querySelector(`[data='${event.code}']`);
  pressedButton.classList.add('press');
  setTimeout(() => {
    pressedButton.classList.remove('press');
  }, 200);
};

document.querySelectorAll('.key').forEach((item) => {
  item.addEventListener('click', () => {
    item.getAttribute('data');
    item.classList.add('press');
    setTimeout(() => {
      item.classList.remove('press');
    }, 200);
  });
});

document.querySelectorAll('.key').onkeydown = function addTextToField(event) {
  console.log(event);
};
