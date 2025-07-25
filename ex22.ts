function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return ""; // se for vazio, retorna ""

    let prefixo = strings[0]; // começa com a primeira palavra

    for (let i = 1; i < strings.length; i++) {
        while (!strings[i].startsWith(prefixo)) {
            prefixo = prefixo.slice(0, -1);

            if (prefixo === "") return "";
        }
    }

    return prefixo;
}
