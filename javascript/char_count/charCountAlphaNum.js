/*
  Count chars, match alpha-numeric using isAlphaNumeric() function
*/

function charCount(string) {
    let count = {};
    for (let char of string) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            if (count[char] > 0) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    }
    return count;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false;
        }
    return true;
}

console.log(charCount("Hello, how are you? Please call me at (212) 310-4153."));