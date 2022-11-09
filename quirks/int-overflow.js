var max = Number.MAX_VALUE;
var x = max + 10;

// When JS detects a max overflow, it just assigns Number.MAX_VALUE, so max === x is true
console.log(max, x, max === x);


var min = Number.MIN_VALUE;
var y = min / 10;

// When JS detects an underflow, it assigns 0 as the value. so min === y is false
console.log(min, y, min === y);


// ~~ is essentially performing what I would have otherwise used Math.floor for 
// It is chopping off everything after the decimal. So it's worth noting that it
// will not behave equivalently to Math.floor for negative numbers.

let min = ~~(left + right / 2)
