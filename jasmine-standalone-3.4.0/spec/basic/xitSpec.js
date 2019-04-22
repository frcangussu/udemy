/**
 * Suítes podem ser desabilitadas com "xdescribe"
 */
describe("Suite - suite com testes desabilitados (it) ", function () {

    var contadorExterno = 0;

    beforeEach(function(){
        contadorExterno++;
    });

    xit("teste desabilitado por 'xit'",function(){
        expect(contadorExterno).toEqual(1);
    });

    it("teste desabilitado (sem function) - somente descrição");

    describe("Suite interna",function(){
        var contadorInterno = 0;

        beforeEach(function(){
            contadorInterno++;
        });

        it("deve validar o valor dos contadores",function(){
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
            pending('teste desabilitado com "pending"');
        });
    });

});