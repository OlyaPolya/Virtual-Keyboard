export const codeOfBtnIn2LineEn = {
  Tab: 'Tab',
  KeyE: 'e',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  KeyQ: 'q',
  KeyR: 'r',
  KeyT: 't',
  KeyU: 'u',
  KeyW: 'w',
  KeyY: 'y',
  BracketLeft: '[',
  BracketRight: ']',
};
export const codeOfBtnIn2LineRu = {
  Tab: 'Tab',
  KeyE: 'у',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  KeyQ: 'й',
  KeyR: 'к',
  KeyT: 'е',
  KeyU: 'г',
  KeyW: 'ц',
  KeyY: 'н',
  BracketLeft: 'х',
  BracketRight: 'ъ',
};
export const codeOfBtnIn2LineEnShift = {
  Tab: 'Tab',
  KeyE: 'E',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  KeyQ: 'Q',
  KeyR: 'R',
  KeyT: 'T',
  KeyU: 'U',
  KeyW: 'W',
  KeyY: 'Y',
  BracketLeft: '{',
  BracketRight: '}',
};
export const codeOfBtnIn2LineRuShift = {
  Tab: 'Tab',
  KeyE: 'У',
  KeyI: 'Ш',
  KeyO: 'Щ',
  KeyP: 'З',
  KeyQ: 'Й',
  KeyR: 'К',
  KeyT: 'Е',
  KeyU: 'Г',
  KeyW: 'Ц',
  KeyY: 'Н',
  BracketLeft: 'Х',
  BracketRight: 'Ъ',
};
// в объекте цифры указывают на номер ряда клавиатура, внутри 2 объекта.
// Первый объект - обычные, вторые с шифтом
export const codeOfBtnInLineEn = {
  1: [
    {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Equal: '=',
      Minus: '-',
      Backspace: 'Backspace',
    },
    {
      Backquote: '~',
      Digit1: '!',
      Digit2: '@',
      Digit3: '#',
      Digit4: '$',
      Digit5: '%',
      Digit6: '^',
      Digit7: '&',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Equal: '+',
      Minus: '_',
      Backspace: 'Backspace',
    },
  ],
  2: [
    {
      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
    },
    {
      Tab: 'Tab',
      KeyQ: 'Q',
      KeyW: 'W',
      KeyE: 'E',
      KeyR: 'R',
      KeyT: 'T',
      KeyY: 'Y',
      KeyU: 'U',
      KeyI: 'I',
      KeyO: 'O',
      KeyP: 'P',
      BracketLeft: '{',
      BracketRight: '}',
    },
  ],
};

export const codeOfBtnInLineRu = {
  1: [
    {
      Backquote: 'ё',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Equal: '=',
      Minus: '-',
      Backspace: 'Backspace',
    },
    {
      Backquote: 'Ё',
      Digit1: '!',
      Digit2: '"',
      Digit3: '№',
      Digit4: ';',
      Digit5: '%',
      Digit6: ':',
      Digit7: '?',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Equal: '+',
      Minus: '_',
      Backspace: 'Backspace',
    },
  ],
  2: [
    {
      Tab: 'Tab',
      KeyQ: 'й',
      KeyW: 'ц',
      KeyE: 'у',
      KeyR: 'к',
      KeyT: 'е',
      KeyY: 'н',
      KeyU: 'г',
      KeyI: 'ш',
      KeyO: 'щ',
      KeyP: 'з',
      BracketLeft: 'х',
      BracketRight: 'ъ',
    },
    {
      Tab: 'Tab',
      KeyQ: 'Й',
      KeyW: 'Ц',
      KeyE: 'У',
      KeyR: 'К',
      KeyT: 'Е',
      KeyY: 'Н',
      KeyU: 'Г',
      KeyI: 'Ш',
      KeyO: 'Щ',
      KeyP: 'З',
      BracketLeft: 'Х',
      BracketRight: 'Ъ',
    },
  ],
};

// console.log(Object.values(codeOfBtnInLineEn[1][0])[0]);

/*
const keyboardvalue = {};

document.onkeydown = function (event) {
  console.log(event);
  const x = event.code;
  const b = event.key;
  keyboardvalue[x] = b;
  console.log(keyboardvalue);
};
const codeOfBtnInFirdLineEn =
const codeOfBtnInFirdLineRu = {
const codeOfBtnInFirdLineEnShift =
const codeOfBtnInFirdLineRuShift =

const codeOfBtnInFourthLineEn =
const codeOfBtnInFourthLineRu =
const codeOfBtnInFourthLineEnShift =
const codeOfBtnInFourthLineRuShift =

const codeOfBtnInFifthLineEn =
const codeOfBtnInFifthLineRu =
const codeOfBtnInFifthLineEnShift =
const codeOfBtnInFifthLineRuShift =
*/
