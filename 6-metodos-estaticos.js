function Pen() {
  this.color = '';
  this.getColor = function() {
    return this.color;
  }
  this.setColor = function(_color) {
    this.color = _color;
  }
}

var pen = new Pen();
pen.setColor('red');
console.log(pen);

Pen.manufecturer = '';
Pen.setManufecturer = function(_manufecturer) {
  this.manufecturer = _manufecturer;
};
Pen.getManufeturer = function() {
  return this.manufecturer;
}
Pen.setManufecturer('Bic');
console.log(Pen.getManufeturer());
var pen2 = new Pen();
console.log(pen2.getManufeturer());//vai dar erro pois a function pertence a classe(static) e não ao objeto.