/**
 * Função JS global do Jasmine que é executada antes de cada teste
 * Serve para inicializar ou reiniciar um status
 * Pode também executar uma ação antes de cada teste
 */
describe("Suite - funcionamento do beforeEach", function () {

    let contador = 0;

    beforeEach(function(){
        contador++;
    });

    it("deve incrementar o contador para 1", function () {
        expect(contador).toEqual(1);
    });

    it("deve incrementar o contador para 2",function(){
        expect(contador).toEqual(2);
    })
});