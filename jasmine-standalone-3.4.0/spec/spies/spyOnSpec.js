/**
 * spyOn serve para criar um mock (objeto falso) a ser utilizado nos testes
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

    it("deve possuir o método somar como não definido",function(){
        expect(Calculadora.somar(1,1)).toBeUndefined();
    });

})