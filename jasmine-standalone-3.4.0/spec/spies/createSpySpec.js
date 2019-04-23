/**
 * cria uma função spy do zero
 * é uma função global JS do Jasmine
 * possui todos os atributos de um objeto spy comum
 * recebe como parâmetro o nome da função a ser criado o spy
 * deve ser utilizado quando se precisa de um objeto que não se tem acesso direto a ele
 * não permite implementar o método declarado assim como somente permite a criação de um único método
 */
describe("Testes do objeto jasmine.createSpy",function(){

    var somar;

    beforeAll(function(){
        somar = jasmine.createSpy("somar");
    });

    it("deve demonstrar o uso do jasmine.createSpy",function(){

        somar(1,2);

        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1,2);

    });

});