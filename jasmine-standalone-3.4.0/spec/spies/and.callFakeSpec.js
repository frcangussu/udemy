/**
 * serve para definir uma nova implementação para um método de um spy
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
        spyOn(Calculadora,"somar").and.callFake(function(a,b){
            return a - b;
        });
    });

    it("deve transformar o método 'somar' em uma subtração",function(){
        expect(Calculadora.somar(5,2)).toEqual(3);
    });

})