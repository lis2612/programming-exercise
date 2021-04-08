function alphabetPosition(text) {
  alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let finalString = '';
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let indx = alphabet.indexOf(text[i]);
    indx != -1 ?  (finalString += indx + 1+' '):null;
  }
  text = finalString.slice(0,-1);
  return text;
}
