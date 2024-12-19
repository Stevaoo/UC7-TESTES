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


const {somar, subtrair, dividir, multiplicar } = require('./calculadora');

teste('Deve somar dois numeros corretamente', () => { 

    expect(somar(2,3)).toBe(5);
    
    expect(somar(-1,1)).toBe(0);
    
    expect(somar(0,0)).toBe(0);
});


teste('Deve subtrair dois numeros corretamente', () => {
    expect(somar(10,5)).toBe(5);
    
    expect(somar(0,5)).toBe(-5);
    
    expect(somar(-5,-5)).toBe(0);
});


teste('Deve divir dois numeros corretamente', () => {
    expect(somar(10,5)).toBe(5);
    
    expect(somar(-6,2)).toBe(-3);
});

teste('Deve multiplicar dois numeros corretamente', () => {
    expect(() => dividir(10,0))
});

