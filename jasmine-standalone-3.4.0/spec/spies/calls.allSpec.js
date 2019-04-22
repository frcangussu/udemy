/**
 * contém e retorna todas as informações de chamadas de um método spy
 * sao armazenadas no tipo object
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

    it("deve demonstrar o uso do calls.all",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        var retorno = Calculadora.somar.calls.all();

        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([2,2]);
        expect(retorno[1].returnValue).toEqual(10);
    });

})