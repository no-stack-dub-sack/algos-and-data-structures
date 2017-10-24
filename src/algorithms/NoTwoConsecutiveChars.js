export default
`// No 2 Consecutive Characters Challenge:

// Given a random string, return a new string containing all the
// characters of the original string, but no 2 characters should
// be consecutive. If such a string can't be created, return false.

// Ex1.
// Input: ABBCCD
// Output: ABCBCD

// Ex2.
// Input: AAAB
// Output: false

function noTwoRepeatingChars(str) {

    var freqTable = {};

    for (var char of str) {
        freqTable[char] = -~freqTable[char];
    }


    function getNextChar(newStr = '', lastChar = '') {
        var mostFreq = 0,
            nextMostFreq = 0,
            nextChar = '';

        for (var char in freqTable) {
            if (freqTable[char] > mostFreq) {
                mostFreq = freqTable[char];
                nextChar = char;
            }

            if (nextChar === lastChar) {
                if (freqTable[char] > nextMostFreq && char !== lastChar) {
                    nextMostFreq = freqTable[char];
                    nextChar = char;
                }
            }
        }


        if (!mostFreq) {
            return newStr;
        } else if (nextChar === lastChar) {
            return false;
        } else {
            newStr+=nextChar;
            lastChar = nextChar;
            freqTable[lastChar]--;
            return getNextChar(newStr, lastChar);
        }
    }

    return getNextChar();
}

console.log(noTwoRepeatingChars('aaba'));
console.log(noTwoRepeatingChars('aabba'));
console.log(noTwoRepeatingChars('aaaaaaabbbbcc'));
console.log(noTwoRepeatingChars('aaabaaabbbbbbbbbccccbbcbsd'));
console.log(noTwoRepeatingChars('aaabaaabbbbbbbbbbccccbbcbsd'));
console.log(noTwoRepeatingChars('aaabaaabbbbbbbbbbbccccbbcbsd'));
`;
