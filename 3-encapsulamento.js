function Person() {
  var name = '';
  var age = 0;

  this.getName = function() {
    return this.name;
  }  
  this.setName = function(_name) {
    this.name = _name;
  }
  this.getAge = function() {
    return this.age;
  }
  this.setAge = function(_age) {
    this.age = _age;
  }
}

var will = new Person();
will.setName('will');
will.setAge(25);

console.log(will.name);