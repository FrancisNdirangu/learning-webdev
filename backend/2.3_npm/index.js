import superhero from '@fakerjs/superhero'

const supeName = superhero();

var motto = 'My name is ${supeName}';

console.log(supeName);
console.log(`Hello, have no fear for I am here! I am ${supeName}`);
