function Person() {
  this.name = '';
  this.age = 0;
  var tatto = 0;

  this.move = function(canSwim) {
    if (canSwim) {
      return swim();
    }
    return console.log("I'm walking");
  }
  var swim = function() {
    return console.log("I'm swimming");
  }
}

var will = new Person();

console.log(will);

will.move();
will.move(true);