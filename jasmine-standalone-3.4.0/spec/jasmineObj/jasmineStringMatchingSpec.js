/**
 * serve para verificar se um objeto o variável é diferente de "null" ou "undefined"
 * pode ser utilizado em spies para certificar que um valor foi passado como parâmetro
 */
describe("Testes do objeto jasmine.stringMatching",()=>{
  
    var exibirTexto;

    beforeAll(()=>{
        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it('deve demonstrar o uso do jasmine.stringMatching', () => {
        
        exibirTexto("Curso de Jasmine");
        
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));
        expect("Curso de Javascript").toEqual(jasmine.stringMatching("Javascript"));
    });
                

})