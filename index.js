var Dog = require('./Dog');
var Cat = require('./Cat');
var dog = new Dog('Bully');
dog.sayHi();
var tom = new Cat();
dog.eat(tom);
console.log(dog);