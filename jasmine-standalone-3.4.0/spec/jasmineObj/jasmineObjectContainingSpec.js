/**
 * serve para verificar se determinada entrada (chave ou valor) existe em um objeto
 * recebe como parâmetro o bloco a ser verificado em um objeto
 */
describe("Testes do objeto jasmine.objectContaining",()=>{
    
    var carro;
  
    beforeAll(()=>{
        carro = {
            'ano': 2017
        };
    });

    it('deve demonstrar o uso do jasmine.objectContaining', () => {
        
        expect(carro).toEqual(jasmine.objectContaining({'ano':2017}));

    });
                

})