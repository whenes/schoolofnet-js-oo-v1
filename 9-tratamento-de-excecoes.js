function notDefined(message) {
  this.message = message || 'Function is not defined!';
  Error.call(this.message);  
}
notDefined.prototype = new Error();

var hello = function() {
  console.log('hello');
}

try {
  hello();
} catch(e) {
  throw new notDefined();
} finally {
  console.log('Finally block');
}