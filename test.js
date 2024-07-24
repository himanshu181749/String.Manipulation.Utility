const { capitalize, reverse, truncate } = require('./index');

console.log(capitalize('hello')); // Hello
console.log(reverse('world'));   // dlrow
console.log(truncate('This is a long string', 10)); // This is a...
