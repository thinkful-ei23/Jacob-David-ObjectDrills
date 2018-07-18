'use strict';

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length){ return false; }
  for (let i = 0; i < expectedKeys.length; i++) {
    if (object.hasOwnProperty(expectedKeys[i]) === false) {
      return false;
    } 
  }
  return true;
}