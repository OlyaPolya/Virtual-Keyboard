import './assets/styles/style.css';
import './assets/styles/style.scss';
import 'normalize.css';

function getButtonStates() {
  const result = [];

  const spanUpper = document.createElement('span');
  spanUpper.className = 'uppercase';
  const spanLower = document.createElement('span');
  spanLower.className = 'lowercase';
  const spanCapslock = document.createElement('span');
  spanCapslock.className = 'capslock';

  result.push(spanUpper, spanLower, spanCapslock);

  return result;
}

function getListButton(numberOfBtnsInLines) {
  const result = [];

  for (let i = 1; i <= numberOfBtnsInLines; i += 1) {
    const div = document.createElement('div');
    div.className = 'key';
    const spanEn = document.createElement('span');
    spanEn.className = 'en';
    const spanRu = document.createElement('span');
    spanRu.className = 'ru';

    spanEn.append(...getButtonStates());
    spanRu.append(...getButtonStates());
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
    LineBtns.append(...getListButton(numberOfBtnsInLines[i]));
    result.push(LineBtns);
  }

  return result;
}

const numberOfBtnsInLines = [14, 15, 13, 13, 9];
const numberOfLines = numberOfBtnsInLines.length;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const container = document.createElement('div');
container.className = 'container';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

keyboard.append(...getBtnLine(numberOfLines, numberOfBtnsInLines));
container.append(keyboard);
wrapper.append(container);
document.body.append(wrapper);
