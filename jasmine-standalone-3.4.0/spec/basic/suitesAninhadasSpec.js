/**
 * Suítes podem ser aninhadas e conter outras suítes dentro delas
 * ter cuidado para não tornar o teste muito complexo
 */
describe("Suite - teste de aninhamento de suites", function () {

    var contadorExterno = 0;

    beforeEach(function(){
        contadorExterno++;
    });

    it("deve conter 1 para contadorExterno",function(){
        expect(contadorExterno).toEqual(1);
    });

    describe("Suite interna",function(){
        var contadorInterno = 0;

        beforeEach(function(){
            contadorInterno++;
        });

        it("deve validar o valor dos contadores",function(){
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });
    });

});