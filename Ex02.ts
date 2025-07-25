
function toTitleCase(sentence: string): string {
    const words = sentence.split(" "); 
    let sentenceMaiusculo = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > 0) {
            const palavraFormatada = word[0].toUpperCase() + word.slice(1).toLowerCase();
            sentenceMaiusculo += palavraFormatada;
        }

        if (i < words.length - 1) {
            sentenceMaiusculo += " "; 
        }
    }

    return sentenceMaiusculo;
}


