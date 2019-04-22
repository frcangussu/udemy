/**
 * serve para limpar a lista com os dados das chamadas dos métodos de um spy
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

    it("deve demonstrar o uso do calls.reset",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        expect(Calculadora.somar.calls.any()).toBeTruthy();
        
        Calculadora.somar.calls.reset();
        
        expect(Calculadora.somar.calls.any()).toBeFalsy();

    });

})