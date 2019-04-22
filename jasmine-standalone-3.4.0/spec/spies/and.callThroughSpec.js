/**
 * serve par informar ao spy que o método original deve ser executado
 * deve ser aplicado ao objeto spy
 * o método original será executado e não o "mock"
 */
describe("Testes do objeto Spy",function(){

    var Calculadora = {
        somar: function(a,b){
            return a + b;
        },

        subtrair: function(a,b){
            return a - b;
        }
    }

    beforeAll(function(){
        spyOn(Calculadora,"somar").and.callThrough();
        spyOn(Calculadora,"subtrair");
    });

    it("deve executar o método somar original",function(){
        expect(Calculadora.somar(1,1)).toEqual(2);
        expect(Calculadora.subtrair(2,1)).toBeUndefined();
    });

})