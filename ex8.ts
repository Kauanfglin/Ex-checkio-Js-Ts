
function countOccurrences(mainStr: string, subStr: string): number {
mainStr = mainStr.toLowerCase();
    subStr = subStr.toLowerCase();
    
    let verificacao;
    let cont = 0
    for(let i = 0;i<=mainStr.length-subStr.length;i++){
        verificacao = mainStr.slice(i,i+subStr.length)
        if(verificacao === subStr){
      cont++
        }
    }

return cont;
}
