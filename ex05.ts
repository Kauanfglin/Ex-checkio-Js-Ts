
function correctSentence(text: string): string {
    let frasecorrigida = "";
    const fraseseparada = text.split("");
      fraseseparada[0] = fraseseparada[0].toUpperCase();

    for(let i = 0;i<fraseseparada.length;i++){
        frasecorrigida += fraseseparada[i];
    }
if (!frasecorrigida.endsWith(".")) {
        frasecorrigida += ".";
    }

    return frasecorrigida;
}


