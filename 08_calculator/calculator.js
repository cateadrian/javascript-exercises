const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(array) {
	return array.reduce((total, item) => {
    return total * item;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
// Iterative version
//	let total = 1;
//  for (a; a > 0; a --){
//    total *= a;
//  }
//  return total;

// Recursive version
  if(a == 0){
    return 1;
  } else {
    return a * factorial(a-1);
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
