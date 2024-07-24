const { capitalize, reverse, truncate } = require('simple-string-utils');

console.log(capitalize('hello')); // Hello
console.log(reverse('world'));   // dlrow
console.log(truncate('This is a long string', 10)); // This is a...
