let conversion = {

get farenheit() {
return 1.8; 

},
conversao(celsius){
return celsius * this.farenheit + 32;

}


}

console.log(conversion.conversao(10)); 



/* usando funcao
function  converte(celsius){
return celsius * 1.8 + 32
}
console.log(converte(10));
*/


