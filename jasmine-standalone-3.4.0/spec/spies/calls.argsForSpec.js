/**
 * armazena e retorna uma lista (array) contendo os parâmetros utilizados em cada chamada do método de um spy
 * similar ao toHaveBeenCalledWith
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
        spyOn(Calculadora,"somar");
    });

    it("deve demonstrar o uso do calls.argsFor",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([2,2]);
    });

})