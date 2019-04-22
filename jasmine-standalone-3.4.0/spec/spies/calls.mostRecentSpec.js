/**
 * retorna os dados da última chamada do método do spy
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

    it("deve demonstrar o uso do calls.mostRecent",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        var retorno = Calculadora.somar.calls.mostRecent();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([2,2]);
        expect(retorno.returnValue).toEqual(10);
    });

})