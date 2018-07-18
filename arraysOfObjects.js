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
    name: 'Tim Cook',
    jobTitle: 'COO'
  }
];
for (let i = 0; i < developers.length; i++) {
  if (developers[i].jobTitle !== 'CEO'){
    developers[i].boss = 'Steve Jobs'
  }
  developers[i].boss === 'Steve Jobs'? console.log(`${developers[i].jobTitle} ${developers[i].name} reports to ${developers[i].boss}.`) : console.log(`${developers[i].jobTitle} ${developers[i].name} doesn't report to anybody.`);
}

