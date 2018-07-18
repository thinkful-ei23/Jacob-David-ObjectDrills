'use strict';

let message = 'craft block argon meter bells brown croon droop';

const cypher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word) {
  if (cypher[word[0]] === 2) {
    return word[1];
  } else if (cypher[word[0]] === 3) {
    return word[2];
  } else if (cypher[word[0]] === 4) {
    return word[3];
  } else if (cypher[word[0]] === 5) {
    return word[4];
  } else {
    return ' ';
  }
}

function decodeWords(sentence) {
  const sentArr = sentence.split(' ');
  let decodedMessage = '';
  for (let i = 0; i < sentArr.length; i++) {
    decodedMessage += decode(sentArr[i]);
  }
  return decodedMessage;
}

console.log(decodeWords(message));
