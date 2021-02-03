/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
console.log(`Hello ${name}`);
  // Your code here
}
greet("Hamza");


/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  return (n % 2 == 1); 
}

console.log(isOdd(10));


/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
if (n % 2 ==1) {
  return ((n /2) -0.5);
} else {
  return (n /2);
}
}
console.log(oddsSmallerThan(20));


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if ( n % 2 == 1) {
    return (n*n);// Your code here
} else {
  return (n *2);
}
}
console.log(squareOrDouble(9));


module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
