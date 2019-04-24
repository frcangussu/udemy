/**
 * serve para verificar se um valor é de um determinado tipo
 * para comparar valores reais ou valores utilizados em spies
 */
describe("Testes do objeto jasmine.any",()=>{
  
    var dobro;

    beforeAll(()=>{
        dobro = jasmine.createSpy("dobro");
    });

    it('deve demonstrar o uso do jasmine.any', () => {
        
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));

    });
                
});