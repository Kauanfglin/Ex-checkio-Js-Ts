
function exceptZero(array) {
let ordenados = array.filter(n => n !== 0).sort((a,b) => a - b)//filtrei por diferentes de 0 e ordenei

let i = 0
return array.map(n => n ===0 ? 0 : ordenados[i++])
}
console.log("Example:");
console.log(JSON.stringify(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])));
