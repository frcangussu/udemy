/**
 * serve para verificar se um objeto o variável é diferente de "null" ou "undefined"
 * pode ser utilizado em spies para certificar que um valor foi passado como parâmetro
 */
describe("Testes do objeto jasmine.anything",()=>{
  
    var dobro;

    beforeAll(()=>{
        dobro = jasmine.createSpy("dobro");
    });

    it('deve demonstrar o uso do jasmine.anything', () => {
        
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.anything());

    });
                

})