var Value = {
  val: 10,
  getValue: function() {
    return this.val + 2;
  }
}

console.log(Value.getValue());

var Value2 = Object.create(Value);
Value2.getValue = function(_val) {
  return this.val + 10 + _val;
}

console.log(Value2.getValue(3));