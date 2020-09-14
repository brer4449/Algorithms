// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1 (his way)
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// https://www.indeed.com/career-advice/finding-a-job/explaining-job-search-barriers?from=career_guide_email&isid=careeradvice-us&ikw=career_guide_newsletter_2020_09_09_jsx_for_cg_us_template_b&utm_campaign=jsx_for_cg&utm_source=jobseeker_email&utm_medium=email

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/\[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// Solution 2 (my way with hints by him) performance concerns though...
// function anagrams(stringA, stringB) {
//   const aSorted = stringA
//     .replace(/\[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
//   const bSorted = stringB
//     .replace(/\[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
//   return aSorted === bSorted;
// }

// Solution 2 (his way)
function anagrams(stringA, stringB) {
  return cleanedString(stringA) === cleanedString(stringB);
}

function cleanedString(str) {
  return str
    .replace(/\[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
