const sleeve = require('./index.js');

const b= {}

console.log(sleeve(b, "f", 66));
sleeve(b, "what.is.this", function(){console.log("this is a fail")})
