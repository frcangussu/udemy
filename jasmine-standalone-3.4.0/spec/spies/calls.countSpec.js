/**
 * armazena e retorna o número de vezes que um método do spy foi chamado
 * similar ao toHaveBeenCalledTimes
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

    it("deve demonstrar o uso do calls.count",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

})