var Animal = function() {
  throw 'This is an abstract class';
}

Animal.prototype.name = '';
Animal.prototype.sound = '';
Animal.prototype.say = function() {
  return console.log(this.name + ' Emit -> ' + this.sound);
}

var Cat = function() {
  this.name ='Cat';
  this.sound = 'meow';
}

var Dog = function() {
  this.name = 'Dog';
  this.sound = 'woof';
}

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

console.log(new Cat(), new Dog());
console.log(new Cat().say(), new Dog().say());
console.log(new Animal());//lança exception