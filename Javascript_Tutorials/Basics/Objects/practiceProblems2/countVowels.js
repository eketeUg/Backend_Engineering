/**
 * Count Vowels
Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".

Handle lowercase and uppercase vowels.
 */
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const numOfVowels = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const isVowel = vowels.indexOf(element.toLowerCase()) >= 0; // using the indexOf method to check wether the element is contained in the vowel array
    if (isVowel) {
      numOfVowels.push(element);
      console.log(element);
    }
  }
  //   console.log(numOfVowels);
  return numOfVowels.length;
}

console.log(countVowels("bcazaxeuA"));
