/**
 * retorna os dados da primeira chamada do método do spy
 * 
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

    it("deve demonstrar o uso do calls.first",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        var retorno = Calculadora.somar.calls.first();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1,1]);
        expect(retorno.returnValue).toEqual(10);
    });

})