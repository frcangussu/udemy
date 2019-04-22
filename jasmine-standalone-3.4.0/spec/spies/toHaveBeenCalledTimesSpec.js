/**
 * serve para verificar quantas vezes um método do spy foi chamado
 */
describe("Testes do objeto Spy",function(){

    var Calculadora = {
        somar: function(a,b){
            return a + b;
        }
    }

    beforeAll(function(){
        spyOn(Calculadora,"somar");
    });

    it("deve chamar o método somar 2 vezes",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

})