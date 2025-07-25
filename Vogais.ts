
const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
    let vogais = 0;
    for (let i = 0; i < text.length; i++) {
        if (VOWELS.includes(text[i].toLowerCase())) {
            vogais++;
        }
    }
    return vogais;
}

console.log("Example:");
console.log(countVowels("Hello"));

// These "asserts" are used for self-checking


console.log("Coding complete? Click 'Check Solution' to earn rewards!");
