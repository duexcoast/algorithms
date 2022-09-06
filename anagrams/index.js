// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g);
  const strB = stringB.replace(/[^\w]/g);

  if (strA.length !== strB.length) return false;

  const mapA = {};
  const mapB = {};

  for (let char of strA) {
    mapA[char] ? mapA[char]++ : (mapA[char] = 1);
  }
  for (let char of strB) {
    mapB[char] ? mapB[char]++ : (mapB[char] = 1);
  }
  for (let elem in mapA) {
    if (mapA[elem] !== mapB[elem]) return false;
  }
  return true;
}
anagrams('helium', 'hydraulics');
module.exports = anagrams;
