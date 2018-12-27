const chalk = require('chalk');
function Dog(name) {
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};
Dog.prototype.sayHi = function() {
	// body...
	console.log('Hi, I am a dog , my name is ' +chalk.blue(this.name));
};
module.exports = Dog;