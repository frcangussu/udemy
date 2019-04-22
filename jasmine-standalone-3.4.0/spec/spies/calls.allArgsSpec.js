/**
 * armazena e retorna uma lista com todos os argumentos de todas as chamadas aos métodos de um spy
 * prefira utilizar o "calls.argsFor" quando precisar verificar um ítem em específico
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

    it("deve demonstrar o uso do calls.allArgs",function(){
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);
        expect(Calculadora.somar.calls.allArgs(0))
            .toEqual([
                [1,1],
                [2,2]
            ]);
    });

})