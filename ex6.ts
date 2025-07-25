
function backwardString(value: string): string {
let ReverseWords = "";
    for(let i = value.length - 1;i>=0;i--){
    ReverseWords += value[i];
}
    return ReverseWords
}
console.log("Example:");
console.log(backwardString("val"));

