/**
 * todo spy possui um atributo "calls" com informações sobre suas chamadas
 * serve para indicar se o método do spy foi chamado ao menos uma vez
 * similar ao toHaveBeenCalled
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

    it("deve demonstrar o uso do calls.any",function(){
        Calculadora.somar(1,1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

})