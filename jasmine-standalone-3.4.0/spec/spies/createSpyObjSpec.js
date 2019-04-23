/**
 * cria um objeto spy do zero
 * é uma função global JS do Jasmine
 * possui todos os atributos de um objeto spy comum
 * recebe como parâmetro o nome do objeto a ser criado o spy, assim como seus métodos em formato array
 * deve ser utilizado quando se precisa de um objeto que não se tem acesso direto a ele
 * permite a utilização de todos os elementos "and."
 */
describe("Testes do objeto jasmine.createSpyObj",function(){

    var Calculadora;

    beforeAll(function(){
        Calculadora = jasmine.createSpyObj("Calculadora",["somar","subtrair"]);
        Calculadora.somar.and.returnValue(5);
    });

    it("deve demonstrar o uso do jasmine.createSpyObj",function(){

        var retorno = Calculadora.somar(1,2);

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
        expect(retorno).toEqual(5);

    });

});