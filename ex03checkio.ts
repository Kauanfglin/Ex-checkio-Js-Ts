
function longestWord(sentence: string): string {
    // Remove pontuações
    const fraselimpa = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    
    // Separa a frase em palavras
    const palavras = fraselimpa.split(" ");
    
    // Variável para guardar a maior palavra
    let Maior = "";
    
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > Maior.length) {
            Maior = palavras[i];
        }
    }
    
    return Maior;
}


