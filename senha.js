/*Crie uma função login(usuario, senha) que retorna uma Promise. Só aceita login se for "admin" e "1234".
*/
function login(usuario,senha){
    return Promisse((resolve,reject)=>{
        if(usuario === "admin" && senha === "1234"){
            resolve("Login efetuado com sucesso");
        }else{
            reject("Login ou senha incorretos");

        }
    })
}
//teste
login("admin","1234").then(Element=>{
    console.log(Element);
}).catch(Element=>{
    console.log(Element);
})