function Address() {
  var number = 0;
  var city = '';
}
Address.prototype.getNumber = function() {
  return number;
};
Address.prototype.setNumber = function(_number) {
  number = _number;
}
Address.prototype.getCity = function() {
  return city;
};
Address.prototype.setCity = function(_city) {
  city = _city;
}

var a = new Address();
a.setNumber(33);
a.setCity('sp');

console.log(a.getNumber(), a.getCity());

function Person() {
  var name = '';
  var age = 0;
}

Person.prototype = new Address();
Person.prototype.constructor = Person;

Person.prototype.getName = function() {
  return name;
};
Person.prototype.setName = function(_name) {
  name = _name;
}
Person.prototype.getAge = function() {
  return age;
};
Person.prototype.setAge = function(_age) {
  age = _age;
}

var will = new Person();
will.setName('will');
will.setAge(32);
will.setNumber(44);
will.setCity('pa');

console.log(will.getName(), will.getAge(), will.getNumber(), will.getCity());
