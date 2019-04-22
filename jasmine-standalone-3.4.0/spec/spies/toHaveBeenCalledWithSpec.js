/**
 * verifica com quais parâmetros um método do spy foi chamado
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

    it("deve chamar o método somar com os parâmetros válidos",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });

})