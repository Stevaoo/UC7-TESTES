function somar(a,b) {
    return a + b
}; 

function subtrair(a,b){
    return a - b
};

function divir(a,b){
    if(b===0){
        throw new Error("Divisao por zero (indetrminacao)!")
    }
    return a / b 
};

function multiplicar(a,b){
    return a * b
};

module.exports = {somar, subtrair, divir ,multiplicar};
    