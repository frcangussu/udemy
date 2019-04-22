/**
 * serve para informar se um método do spy foi executado ao menos uma vez
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

    it("deve chamar o método somar ao menos uma vez",function(){
        Calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

})