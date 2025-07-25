
function digitsMultip(data: number): number {
    let conversao = data.toString(); // converter para string
    let resultado = 1;

    for (let i = 0; i < conversao.length; i++) {
        if (conversao[i] !== '0') {
            resultado *= parseInt(conversao[i]);
        }
    }

    return resultado;
}
