/**
 * serve para informar ao spy que determinado método deve lançar um erro ao ser executado
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
        spyOn(Calculadora,"somar").and.throwError("ocorreu um erro")
    });

    it("deve lançar um erro ao somar",function(){
        expect(function(){
            Calculadora.somar(1,1);
        }).toThrowError("ocorreu um erro");
    });

})