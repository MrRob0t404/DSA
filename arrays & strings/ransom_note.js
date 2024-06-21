/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  let ransomNoteFreq = countFreq(ransomNote);
  let magazineFreq = countFreq(magazine);
  for (let char in ransomNoteFreq) {
    if (ransomNoteFreq[char] > magazineFreq[char] || !magazineFreq[char]) {
      return false;
    }
  }
  return true;
};

const countFreq = (s) => {
  let freq = {};

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]] = freq[s[i]] + 1;
    } else {
      freq[s[i]] = 1;
    }
  }

  return freq;
};
