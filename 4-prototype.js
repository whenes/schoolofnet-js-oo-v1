var Animal = function() {};

Animal.prototype.name = '';
Animal.prototype.type = '';

Animal.prototype.move = function(){ return console.log("I'm moving"); };
Animal.prototype.say = function(){};

console.log(new Animal());

var cat = new Animal();

cat.move();