
function isArmstrong(num: number): boolean {
    
    //transformar em string
    
    let digitos = num.toString().split("");//colocando em string
    let calculo = 0;
    for(let i = 0;i<digitos.length;i++){
let digitoNum = Number(digitos[i])//transformando em digitos
calculo += Math.pow(digitoNum,digitos.length)
        
    }
    
    return calculo ===num;
}

