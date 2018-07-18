'use strict';

const newObj = {
  foo: 'one',
  bar: 'two',
  fum: 'three',
  quux: 'four',
  spam: 'five'
};

for (let key in newObj) {
  console.log(`${key} ${newObj[key]}`);
}
