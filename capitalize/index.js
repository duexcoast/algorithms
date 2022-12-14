// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const arr = str.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     let cap = arr[i].split('');
//     cap[0] = cap[0].toUpperCase();
//     arr[i] = cap.join('');
//   }
//   return arr.join(' ');
// }

function capitalize(str) {
  const words = [];
  const arr = str.split(' ');

  for (let word of arr) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

console.log(capitalize("they won't know what hit em"));

module.exports = capitalize;
