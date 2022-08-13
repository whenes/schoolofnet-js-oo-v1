function Person() {
  this.name = '';
  this.age = '';
  this.eyesColor = '';
  this.body = '';

  this.move = function() {

  };
  this.say = function() {

  };
  this.see = function() {

  };
}

var will = new Person();

console.log(typeof Person);//function
console.log(typeof will);//object

will.name = 'will';
will.age = 25;
will.eyesColor = 'black';
will.body = 'fat';

console.log(will);