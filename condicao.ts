
function isAcceptablePassword(password: string): boolean {
    let masc = password.toLowerCase();
    let cond0 = false;
    let cond2 = false;

    if (masc.includes("password")) {
        return false;
    }

    if (password.length > 9) {
        cond2 = true;
    } else if (password.length > 6) {
        cond0 = /^(?=.*\d)(?!^\d+$).+/.test(password);
    }

    let uniquechars = new Set(password);
    let hasThreeDifferentChars = uniquechars.size >= 3;

    return (cond0 || cond2) && hasThreeDifferentChars;
}

// Testes
