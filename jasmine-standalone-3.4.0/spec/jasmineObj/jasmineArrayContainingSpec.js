/**
 * serve para verificar se determinados valores existem em um array
 */
describe("Testes do objeto jasmine.arrayContaining",()=>{
  
    var numeros;

    beforeAll(()=>{
        numeros = [1,2,3,4,5];
    });

    it('deve demonstrar o uso do jasmine.arrayContaining', () => {
        
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2,4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));

    });
                

})