/**
 * serve para informar ao spy quais os valores a serem retornados por chamada
 * aceita como parâmetro um ou mais valores separados por vírgula
 * se o número de chamadas for maior do que o de valores a serem retornados, será retornado "undefined"
 * deve ser aplicado ao objeto spy
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
        spyOn(Calculadora,"somar").and.returnValues(1,5);
    });

    it("deve retornar valores distintos para o método somar",function(){
        expect(Calculadora.somar(3,4)).toEqual(1);
        expect(Calculadora.somar(1,2)).toEqual(5);
        expect(Calculadora.somar(4,4)).toBeUndefined();
    });

})