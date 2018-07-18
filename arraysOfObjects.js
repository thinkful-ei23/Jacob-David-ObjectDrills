'use strict';

let developers = [
  {
    name: 'Steve Jobs',
    jobTitle: 'CEO'
  },
  {
    name: 'Steve Wozniak',
    jobTitle: 'Engineer'
  },
  {
    name: 'Bill Gates',
    jobTitle: 'CEO'
  }
];
for (let i = 0; i < developers.length; i++) {
  console.log(`${developers[i].name} ${developers[i].jobTitle}`);
}
