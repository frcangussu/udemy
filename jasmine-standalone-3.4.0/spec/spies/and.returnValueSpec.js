/**
 * serve para informar ao spy o valor de retorno de determinado método
 * deve ser aplicado ao objeto spy
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
        spyOn(Calculadora,"somar").and.returnValue(10);
    });

    it("deve retornar 10 para o método somar",function(){
        expect(Calculadora.somar(1,2)).toEqual(10);
    });

})